import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Subscription} from "rxjs";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {ActionsFormatterComponent} from "../action-cell-rendrer/action-cell-renderer.component";

@Component({
    selector: 'cost-center-details',
    templateUrl: './cost-center-details.component.html'
})

export class DetailsFormatterComponent implements  OnInit{
    master_raw_id = null;
    cost_center_id = null;
    costCenterSubs: Subscription;
    ratioColumnDefs = [];
    ratioRowData = [{id: 0, name: "0", rating_pct: '0', check: 'Add new '}];
    taxesColumnDefs = [];
    taxesRowData = [{id: 0, name: "0", tax_pct: '0', check: 'Add new '}];
    comsColumnDefs = [];
    comsRowData = [{id: 0, name: "0", day_rec_qt: '0', check: 'Add new '}];
    ratio_cost_center_options = {};
    taxes_cost_center_options: {};
    private gridApi;
    private taxGridApi;
    private ratioGridApi;
    private comGridApi;
    private gridColumnApi;
    private ratioGridColumnApi;
    private taxGridColumnApi;
    private comGridColumnApi;

    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };

    constructor(private costCenterApi: CostCentersService){}

    onRatioGridReady(params) {
        this.ratioGridApi = params.api;
        this.ratioGridColumnApi = params.columnApi;
    }
    onTaxGridReady(params) {
        this.taxGridApi = params.api;
        this.taxGridColumnApi = params.columnApi;
    }
    onComGridReady(params) {
        this.comGridApi = params.api;
        this.comGridColumnApi = params.columnApi;
    }

    static extractValues(mappings) {
        return Object.keys(mappings);
    }
    static lookupValue(mappings, key) {
        return mappings[key];
    }

    static lookupKey(mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    }

    ngOnInit() {
        $(document).ready(function () {
            let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
            $('mat-tab-group').width(w)
        })
    }

    agInit(params: any): void {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.cost_center_id = params.value.id;
    }

    toggleDetails() {
        let toggle = $('.details-toggle-'+this.master_raw_id);
        let angle = toggle.find('i');
        let node = this.gridApi.getRowNode(this.master_raw_id);
        let t = $('#tab-details-'+this.master_raw_id);
        let bar = t.find('.mat-ink-bar');
        if(toggle.hasClass('collapsed-toggle')){
            if (this.ratioRowData.length == 1 && this.taxesRowData.length == 1 && this.comsRowData.length == 1){
                this.costCenterSubs = this.costCenterApi.getCostCenterRatio(this.cost_center_id).subscribe(res => {
                    ///////////////////////////////////////
                    this.ratio_cost_center_options = res['cost_centers_options'];
                    this.taxes_cost_center_options = res['taxes_options'];
                    let c = this;
                    this.ratioColumnDefs = [
                        {headerName: '', field: 'check', checkboxSelection: function (params) {return (params.node.id != 0) ;}},
                        {headerName: 'Cost Center Name', field: 'name', editable: true, cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: DetailsFormatterComponent.extractValues(c.ratio_cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return DetailsFormatterComponent.lookupValue(c.ratio_cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return DetailsFormatterComponent.lookupKey(c.ratio_cost_center_options, params.newValue);
                            }
                        },
                        {headerName: 'Rating %', field: 'rating_pct', editable: true},
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    this.ratioRowData = this.ratioRowData.concat(res['ratio']);
                    for (let i=0; i<this.ratioRowData.length; i++){
                        this.ratioRowData[i]['actions'] = {
                            api : this.costCenterApi,
                            id:this.ratioRowData[i].id,
                            delete: [(i != 0), this.deleteRatio],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'ratio',
                            self: this
                        };
                    }
                    //////////////////////////////////////
                    this.taxesColumnDefs = [
                        {headerName: '', field: 'check', checkboxSelection: function (params) {return (params.node.id != 0) ;}},
                        {headerName: 'Tax', field: 'name', editable: true, cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: DetailsFormatterComponent.extractValues(c.taxes_cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return DetailsFormatterComponent.lookupValue(c.taxes_cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return DetailsFormatterComponent.lookupKey(c.taxes_cost_center_options, params.newValue);
                            }
                        },
                        {headerName: 'PCT', field: 'tax_pct', editable: true },
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    this.taxesRowData = this.taxesRowData.concat(res['taxes']);
                    for (let i=0; i<this.taxesRowData.length; i++){
                        this.taxesRowData[i]['actions'] = {
                            api : this.costCenterApi,
                            id:this.taxesRowData[i].id,
                            delete: [(i != 0), this.deleteRatio],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'tax',
                            self: this
                        };
                    }
                    //////////////////////////////////////
                    this.comsColumnDefs = [
                        {headerName: '', field: 'check', checkboxSelection: function (params) {return (params.node.id != 0) ;}},
                        {headerName: 'Com', field: 'name' , editable: true, cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: DetailsFormatterComponent.extractValues(c.ratio_cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return DetailsFormatterComponent.lookupValue(c.ratio_cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return DetailsFormatterComponent.lookupKey(c.ratio_cost_center_options, params.newValue);
                            }
                        },
                        {headerName: 'PCT', field: 'day_rec_qt', editable: true },
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    this.comsRowData = this.comsRowData.concat(res['coms']);
                    for (let i=0; i<this.comsRowData.length; i++){
                        this.comsRowData[i]['actions'] = {
                            api : this.costCenterApi,
                            id:this.comsRowData[i].id,
                            delete: [(i != 0), this.deleteRatio],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'com',
                            self: this
                        };
                    }
                    //////////////////////////////////////
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    bar.css('display', 'block');
                    let r = Math.max(this.ratioRowData.length, this.comsRowData.length, this.taxesRowData.length);
                    t.removeClass('invisible');
                    node.setRowHeight((r*25)+270);
                    this.gridApi.onRowHeightChanged();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                bar.css('display', 'block');
                let r = Math.max(this.ratioRowData.length, this.comsRowData.length, this.taxesRowData.length);
                t.removeClass('invisible');
                node.setRowHeight((r*25)+270);
                this.gridApi.onRowHeightChanged();
            }

        }
        else if (toggle.hasClass('expanded-toggle')){
            node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
            bar.css('display', 'none');
        }
    }

    deleteRatio(id, type, self) {
        if(confirm("Are You Sure")){
            let grid = null;
            let rowData = null;
            if (type == 'ratio') {
                grid = self.ratioGridApi;
                rowData = self.ratioRowData;
            }
            else if (type == 'tax') {
                grid = self.taxGridApi;
                rowData = self.taxesRowData;
            }
            else if (type == 'com') {
                grid = self.comGridApi;
                rowData = self.comsRowData;
            }
            self.costCenterSubs = self.costCenterApi.deleteCostCenterRatio(type, self.cost_center_id, id,{}).subscribe(res => {
                    if (res == 1 ) {
                        rowData = rowData.filter(row => row.id != id);
                        grid.setRowData(rowData);
                    }
                },
                console.error
            );
            return false;
        }
    }

    massDelete(type) {
        let grid = null;
        let rowData = null;
        if (type == 'ratio') {
            grid = this.ratioGridApi;
            rowData = this.ratioRowData;
        }
        else if (type == 'tax') {
            grid = this.taxGridApi;
            rowData = this.taxesRowData;
        }
        else if (type == 'com') {
            grid = this.comGridApi;
            rowData = this.comsRowData;
        }
        let nodes = grid.getSelectedNodes();

        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids: ids};
            if (confirm("Are You Sure")) {
                this.costCenterSubs = this.costCenterApi.deleteCostCenterRatio(type, this.cost_center_id, 'mass', parameter).subscribe(res => {
                        if (res == 1) {
                            rowData = rowData.filter(row => ! (ids.includes(row.id)));
                            grid.setRowData(rowData);
                        }
                    },
                    console.error
                );
                return false;
            }
        }
    }

    save(id, type, self) {
        let parameters = {};
        let grid = null;
        let rowData = null;
        if (type == 'ratio'){
            grid = self.ratioGridApi;
            rowData = self.ratioRowData;
            let row = rowData.filter(row => row.id == id)[0];
            parameters = {'costcenter_part_id': row.name, 'rating_pct': row.rating_pct, 'name':row.name};
        }
        else if (type == 'tax'){
            grid = self.taxGridApi;
            rowData = self.taxesRowData;
            let row = rowData.filter(row => row.id == id)[0];
            parameters = {'tax_id': row.name, 'tax_pct': row.tax_pct, 'name':row.name};
        }
        else if (type == 'com'){
            grid = self.comGridApi;
            rowData = self.comsRowData;
            let row = rowData.filter(row => row.id == id)[0];
            parameters = {'costcenter_com_id': row.name, 'day_rec_qt': row.day_rec_qt, 'name':row.name};
        }
        if(id == 0){
            self.costCenterSubs = self.costCenterApi.addCostCenterRatio(type, self.cost_center_id, parameters).subscribe(res => {
                    if (res > 0 ){
                        parameters['id'] = res;
                        parameters['actions'] = {
                            api : this.costCenterApi,
                            id:res,
                            delete: [true, self.deleteRatio],
                            edit: [false, ''],
                            save: [true, self.save],
                            type: 'ratio',
                            self: self
                        };
                        rowData.push(parameters);
                        grid.setRowData(rowData);
                        return false;
                    }
                },
                console.error
            );
        }
        else {
            self.costCenterSubs = self.costCenterApi.editCostCenterRatio(type, self.cost_center_id, id, parameters).subscribe(res => {
                    if (res == 0 ){
                        return false;
                    }
                },
                console.error
            );
        }
        return false;
    }

}