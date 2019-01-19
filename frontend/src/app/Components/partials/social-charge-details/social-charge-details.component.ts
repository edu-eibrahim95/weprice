import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActionsFormatterComponent} from "../action-cell-rendrer/action-cell-renderer.component";
import {SocialChargeService} from "../../../Services/social-charge.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-social-charge-details',
    templateUrl: './social-charge-details.component.html',
    styleUrls: ['./social-charge-details.component.css']
})
export class SocialChargeDetailsComponent implements OnInit {
    node = null;
    social_chargesSubs: Subscription;
    master_raw_id = null;
    social_charge_id = null;
    account_options = {};
    columnDefs = [];
    rowData = [{id: 0,  check: 'Add new ', name: 0}];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };

    private gridApi;
    private social_chargeGridApi;
    private gridColumnApi;
    private social_chargeGridColumnApi;
    constructor(private social_chargesApi: SocialChargeService) { }

    ngOnInit() {
        $(document).ready(function () {

        })
    }

    onGridReady(params) {
        this.social_chargeGridApi = params.api;
        this.social_chargeGridColumnApi = params.columnApi;
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();

        // let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
        // $('.details').width(w)
    }
    agInit(params: any): void {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.social_charge_id = params.value.id;
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
                this.social_chargesSubs = this.social_chargesApi.getSocialChargeAccounts(this.social_charge_id).subscribe(res => {
                    ///////////////////////////////////////
                    this.account_options = res['accounts_options'];
                    let c = this;
                    this.columnDefs = [
                        {
                            headerName: '', field: 'check',width: 70,  checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Cost Center Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: SocialChargeDetailsComponent.extractValues(c.account_options)
                            },
                            valueFormatter: function (params) {
                                return SocialChargeDetailsComponent.lookupValue(c.account_options, params.value);
                            },
                            valueParser: function (params) {
                                return SocialChargeDetailsComponent.lookupKey(c.account_options, params.newValue);
                            }
                        },
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
                    ];
                    this.rowData = this.rowData.concat(res['social_charges_accounts']);
                    for (let i = 0; i < this.rowData.length; i++) {
                        this.rowData[i]['actions'] = {
                            id: this.rowData[i].id,
                            delete: [(i != 0), this.deleteAccount],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'social_charge_account',
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
        let nodes = this.social_chargeGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids: ids};
            if (confirm("Are You Sure")) {
                this.social_chargesSubs = this.social_chargesApi.deleteSocialChargeAccount(this.social_charge_id,parameter, 'mass').subscribe(res => {
                        if (res == 1) {
                            this.rowData = this.rowData.filter(row => !( ids.includes(row.id)));
                            this.social_chargeGridApi.setRowData(this.rowData);
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
    deleteAccount(id, type, self) {
        if(confirm("Are You Sure")) {
            self.social_chargesSubs = self.social_chargesApi.deleteSocialChargeAccount(self.social_charge_id, {},  id).subscribe(res => {
                    if (res == 1 ) {
                        self.rowData = self.rowData.filter(row => row.id != id);
                        self.social_chargeGridApi.setRowData(self.rowData);
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
        let parameters = {'account_id': row.name, 'name':row.name};
        if(id == 0){
            self.social_chargesSubs = self.social_chargesApi.addSocialChargeAccount(self.social_charge_id, parameters).subscribe(res => {
                    if (res > 0 ){
                        parameters['id'] = res;
                        parameters['actions'] = {
                            api : self.social_chargesApi,
                            id:res,
                            delete: [true, self.deleteAccount],
                            edit: [false, ''],
                            save: [true, self.save],
                            type: 'ratio',
                            self: self
                        };
                        self.rowData.push(parameters);
                        self.social_chargeGridApi.setRowData(self.rowData);
                        self.resetHeight();
                        return false;
                    }
                },
                console.error
            );
        }
        else {
            self.social_chargesSubs = self.social_chargesApi.editSocialChargeAccount(self.social_charge_id, parameters, id).subscribe(res => {
                    if (res == 1 ){
                        return false;
                    }
                },
                console.error
            );
        }
        return false;
    }
    resetHeight(){
        let r = this.rowData.length;
        this.node.setRowHeight((r*25)+200);
        this.gridApi.onRowHeightChanged();
    }

}
