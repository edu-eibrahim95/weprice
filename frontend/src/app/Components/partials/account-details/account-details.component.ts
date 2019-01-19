import { Component, OnInit } from '@angular/core';
import {ActionsFormatterComponent} from "../action-cell-rendrer/action-cell-renderer.component";
import * as $ from 'jquery';
import {Subscription} from "rxjs";
import {AccountService} from "../../../Services/account.service";

@Component({
    selector: 'app-account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
    node = null;
    accountsSubs: Subscription;
    master_raw_id = null;
    account_id = null;
    cost_center_options = {};
    columnDefs = [];
    rowData = [{id: 0, rating_pct: '0', check: 'Add new ', name: 0}];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };

    private gridApi;
    private accountGridApi;
    private gridColumnApi;
    private accountGridColumnApi;
    constructor(private accountsApi: AccountService) { }

    ngOnInit() {
        $(document).ready(function () {
            let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
            $('.details').width(w)
        })
    }

    onGridReady(params) {
        this.accountGridApi = params.api;
        this.accountGridColumnApi = params.columnApi;
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    agInit(params: any): void {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.account_id = params.value.id;
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


    toggleDetails() {
        let toggle = $('.details-toggle-'+this.master_raw_id);
        let angle = toggle.find('i');
        let t = $('#tab-details-'+this.master_raw_id);
        if(toggle.hasClass('collapsed-toggle')) {
            if (this.rowData.length == 1){
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.accountsSubs = this.accountsApi.getAccountCostCenters(this.account_id).subscribe(res => {
                    ///////////////////////////////////////
                    this.cost_center_options = res['cost_center_options'];
                    let c = this;
                    this.columnDefs = [
                        {
                            headerName: '', field: 'check',width: 70, checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Cost Center Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: AccountDetailsComponent.extractValues(c.cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return AccountDetailsComponent.lookupValue(c.cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return AccountDetailsComponent.lookupKey(c.cost_center_options, params.newValue);
                            }
                        },
                        {headerName: 'Rating %', field: 'rating_pct',width: 70, editable: true},
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
                    ];
                    this.rowData = this.rowData.concat(res['accounts_cost_centers']);
                    for (let i = 0; i < this.rowData.length; i++) {
                        this.rowData[i]['actions'] = {
                            api: this.accountsApi,
                            id: this.rowData[i].id,
                            delete: [(i != 0), this.deleteCostCenter],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'account_cost_center',
                            self: this
                        };
                    }

                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                t.removeClass('invisible');
                this.resetHeight();
            }
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
        }
    }
    massDelete() {
        let nodes = this.accountGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids: ids};
            if (confirm("Are You Sure")) {
                this.accountsSubs = this.accountsApi.deleteAccountCostCenter(this.account_id,parameter, 'mass').subscribe(res => {
                        if (res == 1) {
                            this.rowData = this.rowData.filter(row => !( ids.includes(row.id)));
                            this.accountGridApi.setRowData(this.rowData);
                            this.resetHeight();
                        }
                    },
                    console.error
                );
                return false;
            }
        }
        return false;
    }
    deleteCostCenter(id, type, self) {
        if(confirm("Are You Sure")) {
            self.accountsSubs = self.accountsApi.deleteAccountCostCenter(self.account_id, {},  id).subscribe(res => {
                    if (res == 1 ) {
                        self.rowData = self.rowData.filter(row => row.id != id);
                        self.accountGridApi.setRowData(self.rowData);
                        self.resetHeight();
                    }
                },
                console.error
            );
            return false;
        }
    }
    save(id, type, self) {
        let row = self.rowData.filter(row => row.id == id)[0];
        let parameters = {'costcenter_id': row.name, 'rating_pct': row.rating_pct, 'name':row.name};
        if(id == 0){
            self.accountsSubs = self.accountsApi.addAccountCostCenter(self.account_id, parameters).subscribe(res => {
                    if (res > 0 ){
                        parameters['id'] = res;
                        parameters['actions'] = {
                            api : self.accountsApi,
                            id:res,
                            delete: [true, self.deleteCostCenter],
                            edit: [false, ''],
                            save: [true, self.save],
                            type: 'ratio',
                            self: self
                        };
                        self.rowData.push(parameters);
                        self.accountGridApi.setRowData(self.rowData);
                        return false;

                    }
                },
                console.error
            );
        }
        else {
            self.accountsSubs = self.accountsApi.editAccountCostCenter(self.account_id, parameters, id).subscribe(res => {
                    if (res == 0 ){
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
        let r = this.rowData.length;
        this.node.setRowHeight((r*25)+200);
        this.gridApi.onRowHeightChanged();
    }
}
