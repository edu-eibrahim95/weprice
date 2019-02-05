import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {SocialCharge} from "../../../Models/social_charge";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {SocialChargeService} from "../../../Services/social-charge.service";
import * as $ from 'jquery';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
// import {SocialChargeDetailsComponent} from "../../partials/social-charge-details/social-charge-details.component";

@Component({
    selector: 'app-social-charge-overview',
    templateUrl: './social-charge-overview.component.html',
    styleUrls: ['./social-charge-overview.component.css']
})
export class SocialChargeOverviewComponent implements OnInit {
    social_chargesSubs: Subscription;
    social_charges : SocialCharge[];
    columnDefs = [];
    rowData = [];
    add = false;
    edit = false;
    delete = false;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        // detailsFormatterComponent: SocialChargeDetailsComponent
    };
    private gridApi;
    private gridColumnApi;
    constructor(private social_chargesApi : SocialChargeService, private translate: TranslateService,private titleService: Title) { }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
        let w = 7/9 * parseInt($('.ag-theme-material').width());
        $('.details').width(w);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    ngOnInit() {
        this.social_chargesSubs = this.social_chargesApi.getSocialCharges().subscribe(res => {
            this.social_charges = res['social_charges'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                // {headerName: '', field: 'check', checkboxSelection:true, width:60},
                // {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Description', field: 'description'},
                {headerName: 'Initial Date', field: 'initial_date' },
                {headerName: 'Final Date', field: 'final_date'},
                {headerName: 'Charge Pct', field: 'charge_pct'},
                {headerName: 'Account', field: 'account_name'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.social_charges.length; i++){
                // this.social_charges[i]['details'] = {
                //     'row_id': i,
                //     'id': this.social_charges[i].id,
                //     'gridApi' : this.gridApi,
                //     'gridColumnApi': this.gridColumnApi
                // };
                this.social_charges[i]['actions'] = {
                    'self' : this,
                    'id':this.social_charges[i].id,
                    'delete': [this.delete, this.deleteSocialCharge],
                    'edit': [this.edit, '/social_charges/edit/']
                };
            }
            this.rowData = this.social_charges;
        });
        let c = this;
        $(document).ready(function () {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("socialo.social") );
        });
    }

    massDeleteSocialCharges() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.social_chargesSubs = this.social_chargesApi.deleteSocialCharge('mass', parameter).subscribe(res => {
                        if (res == 1 ){
                            location.reload();
                        }
                    },
                    console.error
                );
            }
        }
        return false;
    }

    deleteSocialCharge(id, type, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.social_chargesSubs = self.social_chargesApi.deleteSocialCharge(id, parameter).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }


}
