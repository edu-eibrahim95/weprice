import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Asset} from "../../../Models/asset";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {AssetService} from "../../../Services/asset.service";
import * as $ from 'jquery';
import {AssetDetailsComponent} from "../../partials/asset-details/asset-details.component";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-asset-overview',
    templateUrl: './asset-overview.component.html',
    styleUrls: ['./asset-overview.component.css']
})
export class AssetOverviewComponent implements OnInit {


    assetSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    assets : Asset[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: AssetDetailsComponent
    };
    private gridApi;
    private gridColumnApi;
    constructor(private assetApi: AssetService,  private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.assetSubs = this.assetApi.getAssets().subscribe(res => {
            this.assets = res['assets'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Description', field: 'description'},
                {headerName: 'Description_det', field: 'description_det'},
                {headerName: 'Inventory Qt', field: 'inventory_qt'},
                {headerName: 'Cost Price Unit', field: 'cost_price_unit'},
                {headerName: 'Acquisition Date', field: 'acquisition_date'},
                {headerName: 'Start Depr Date', field: 'start_depr_date'},
                {headerName: 'Expiration Depr Date', field: 'expiration_depr_date'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.assets.length; i++){
                this.assets[i]['details'] = {
                    'row_id': i,
                    'id': this.assets[i].id,
                    'gridApi' : this.gridApi,
                    'gridColumnApi': this.gridColumnApi};
                this.assets[i]['actions'] = {
                    'self' : this,
                    'id':this.assets[i].id,
                    'delete': [this.delete, this.deleteAsset],
                    'edit': [this.edit, '/assets/edit/'] };
            }
            this.rowData = this.assets;
        });
        let c = this;
        $(document).ready(function () {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("assets_edit.assets") );
        });
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
        let w = 7/9 * parseInt($('.ag-theme-material').width());
        $('.details').width(w);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    getGridApi() {
        return this.gridApi;
    }
    deleteAsset(id, type, self) {
        let asset = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.assetSubs = self.assetApi.deleteAsset(id, asset).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    massDeleteAsset() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let asset = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.assetSubs = this.assetApi.deleteAsset('mass', asset).subscribe(res => {
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

}
