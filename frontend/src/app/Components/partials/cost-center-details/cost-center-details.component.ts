import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Subscription} from "rxjs";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {ActionsFormatterComponent} from "../action-cell-rendrer/action-cell-renderer.component";
import swal from 'sweetalert2';
@Component({
    selector: 'cost-center-details',
    templateUrl: './cost-center-details.component.html'
})

export class DetailsFormatterComponent implements  OnInit{
    has_details = true;
    is_comm = true;
    master_raw_id = null;
    cost_center_id = null;
    node = null;
    costCenterSubs: Subscription;
    ratioColumnDefs = [];
    ratioRowData = [];
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
    public rowClassRules;

    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };

    constructor(private costCenterApi: CostCentersService){}

    onRatioGridReady(params) {
        this.ratioGridApi = params.api;
        this.ratioGridColumnApi = params.columnApi;
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
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
        let r =  mappings[key];
        if(! r){
            r = mappings["'"+key+"'"];
        }
        if(r.constructor === Array)
            r = r[0];
        return r;
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

        this.rowClassRules = {
            "has-error": function(params) {
                var error = params.data.error;
                return error == 1;
            },
        };
    }

    agInit(params: any): void {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.cost_center_id = params.value.id;
        let type = params.value.type;
        if(type != 1 && type != 3)  {
            this.has_details = false;
        }
        if(type != 3){
            this.is_comm = false;
        }
    }

    toggleDetails() {
        let toggle = $('.details-toggle-'+this.master_raw_id);
        let angle = toggle.find('i');
        let t = $('#tab-details-'+this.master_raw_id);
        let bar = t.find('.mat-ink-bar');
        if(toggle.hasClass('collapsed-toggle')){
            if (this.ratioRowData.length == 0 && this.taxesRowData.length == 1 && this.comsRowData.length == 1){
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.costCenterSubs = this.costCenterApi.getCostCenterRatio(this.cost_center_id).subscribe(res => {
                    ///////////////////////////////////////
                    let c = this;
                    this.ratio_cost_center_options = res['cost_centers_options'];
                    this.taxes_cost_center_options = res['taxes_options'];
                    this.ratioColumnDefs = [
                        // {headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {return (params.node.data.check != 'Add New') ;}},
                        {headerName: 'Cost Center Name', field: 'name', editable: true, suppressSorting : true,cellEditor: 'agSelectCellEditor',
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
                        {headerName: 'Rating %', field: 'rating_pct', editable: true, width: 70, valueSetter: function(params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            }},
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    let exists = res['ratio'].map(j => parseInt(j.name));
                    for (let i=0; i<Object.keys(this.ratio_cost_center_options).length; i++){
                        let id = parseInt(Object.keys(this.ratio_cost_center_options)[i].replace(/'/g, ''));
                        if( id != 0 && ! exists.includes(id)){
                            this.ratioRowData.push({id : 0, name: id, rating_pct: '0', type: this.ratio_cost_center_options[id][1], abs_order: this.ratio_cost_center_options[id][2],check: "Add New"});
                        }
                    }
                    this.ratioRowData = this.ratioRowData.concat(res['ratio']);
                    this.ratioRowData.sort((a, b) => a.type - b.type);
                    this.ratioRowData.sort((a, b) => (a.type == b.type) ? a.abs_order-b.abs_order: a.type - b.type);
                    for (let i=0; i<this.ratioRowData.length; i++){
                        this.ratioRowData[i]['actions'] = {
                            api : this.costCenterApi,
                            id:this.ratioRowData[i].name,
                            delete: [false, this.deleteRatio],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'ratio',
                            self: this
                        };
                    }
                    //////////////////////////////////////
                    this.taxesColumnDefs = [
                        {headerName: '', field: 'check',width: 70, checkboxSelection: function (params) {return (params.node.id != 0) ;}},
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
                        {headerName: 'PCT', field: 'tax_pct', editable: true , width: 70, valueSetter: function(params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            }},
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
                        {headerName: '', field: 'check',width: 70, checkboxSelection: function (params) {return (params.node.id != 0) ;}},
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
                        {headerName: 'PCT', field: 'day_rec_qt', editable: true, width: 70, valueSetter: function(params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
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
                    t.removeClass('invisible');
                    this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                bar.css('display', 'block');
                t.removeClass('invisible');
                this.resetHeight();
            }
        }
        else if (toggle.hasClass('expanded-toggle')){
            this.node.setRowHeight(50);
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
            self.costCenterSubs = self.costCenterApi.deleteCostCenterRatio(type, self.cost_center_id, id,{}).subscribe(res => {
                    if (res == 1 ) {
                        if (type == 'ratio') {
                            let grid = self.ratioGridApi;
                            self.ratioRowData = self.ratioRowData.filter(row => row.id != id);
                            grid.setRowData(self.ratioRowData);
                        }
                        else if (type == 'tax') {
                            let grid = self.taxGridApi;
                            self.taxesRowData = self.taxesRowData.filter(row => row.id != id);
                            grid.setRowData(self.taxesRowData);
                        }
                        else if (type == 'com') {
                            let grid = self.comGridApi;
                            self.comsRowData = self.comsRowData.filter(row => row.id != id);
                            grid.setRowData(self.comsRowData);
                        }
                        self.resetHeight();
                    }
                },
                console.error
            );
            return false;
        }
    }

    massDelete(type) {
        if (type == 'ratio') {
            let grid = this.ratioGridApi;
            let nodes = grid.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                let ids = nodes.map(row => row.data.id);
                let parameter = {ids: ids};
                if (confirm("Are You Sure")) {
                    this.costCenterSubs = this.costCenterApi.deleteCostCenterRatio(type, this.cost_center_id, 'mass', parameter).subscribe(res => {
                            if (res == 1) {
                                this.ratioRowData = this.ratioRowData.filter(row => ! (ids.includes(row.id)));
                                grid.setRowData(this.ratioRowData);
                                this.resetHeight();
                            }
                        },
                        console.error
                    );
                    return false;
                }
            }
        }
        else if (type == 'tax') {
            let grid = this.taxGridApi;
            let nodes = grid.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                let ids = nodes.map(row => row.data.id);
                let parameter = {ids: ids};
                if (confirm("Are You Sure")) {
                    this.costCenterSubs = this.costCenterApi.deleteCostCenterRatio(type, this.cost_center_id, 'mass', parameter).subscribe(res => {
                            if (res == 1) {
                                this.taxesRowData = this.taxesRowData.filter(row => ! (ids.includes(row.id)));
                                grid.setRowData(this.taxesRowData);
                                this.resetHeight();
                            }
                        },
                        console.error
                    );
                    return false;
                }
            }
        }
        else if (type == 'com') {
            let grid = this.comGridApi;
            let nodes = grid.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                let ids = nodes.map(row => row.data.id);
                let parameter = {ids: ids};
                if (confirm("Are You Sure")) {
                    this.costCenterSubs = this.costCenterApi.deleteCostCenterRatio(type, this.cost_center_id, 'mass', parameter).subscribe(res => {
                            if (res == 1) {
                                this.comsRowData = this.comsRowData.filter(row => ! (ids.includes(row.id)));
                                grid.setRowData(this.comsRowData);
                                this.resetHeight();
                            }
                        },
                        console.error
                    );
                    return false;
                }
            }
        }


    }

    save(id, type, self) {
        let parameters = {};
        let name = 0;
        if (type == 'ratio') {
            let row = self.ratioRowData.filter(row => row.name == id)[0];
            id = row.id;
            name = row.name;
            let ratings = self.ratioRowData.map(row => row.rating_pct);
            let sum = ratings.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
            if (sum > 100){
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Cannot save, Ratings sum cannot exceed 100%!',
                });
                row.error = 1;
                self.ratioGridApi.setRowData(self.ratioRowData);
                return false;
            }
            else {
                row.error=0;
                self.ratioGridApi.setRowData(self.ratioRowData);
            }
            parameters = {'costcenter_part_id': row.name, 'rating_pct': row.rating_pct, 'name': row.name};
        }
        else if (type == 'tax') {
            let row = self.taxesRowData.filter(row => row.id == id)[0];
            parameters = {'tax_id': row.name, 'tax_pct': row.tax_pct, 'name': row.name};
        }
        else if (type == 'com') {
            let row = self.comsRowData.filter(row => row.id == id)[0];
            parameters = {'costcenter_com_id': row.name, 'day_rec_qt': row.day_rec_qt, 'name': row.name};
        }
        if(id == 0){
            self.costCenterSubs = self.costCenterApi.addCostCenterRatio(type, self.cost_center_id, parameters).subscribe(res => {
                    if (res > 0 ){
                        parameters['id'] = res;
                        parameters['actions'] = {
                            api : self.costCenterApi,
                            id:res,
                            delete: [true, self.deleteRatio],
                            edit: [false, ''],
                            save: [true, self.save],
                            type: 'ratio',
                            self: self
                        };
                        if (type == 'ratio'){
                            let row = self.ratioRowData.filter(row => row.name == name)[0];
                            row.id = res;
                        }
                        else if (type == 'tax'){
                            let grid = self.taxGridApi;
                            self.taxesRowData.push(parameters);
                            grid.setRowData(self.taxesRowData);}
                        else if (type == 'com'){
                            let grid = self.comGridApi;
                            self.comsRowData.push(parameters);
                            grid.setRowData(self.comsRowData);}

                        return false;
                    }
                },
                console.error
            );
        }
        else {
            self.costCenterSubs = self.costCenterApi.editCostCenterRatio(type, self.cost_center_id, id, parameters).subscribe(res => {
                    if (res == 1 ){
                        return false;
                    }
                },
                console.error
            );
        }
        self.resetHeight();
        return false;
    }
    resetHeight(){
        let r = Math.max(this.ratioRowData.length, this.comsRowData.length, this.taxesRowData.length);
        this.node.setRowHeight((r*25)+270);
        this.gridApi.onRowHeightChanged();
    }

}