import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Asset} from "../../../Models/asset";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {AssetService} from "../../../Services/asset.service";
import * as $ from 'jquery';
import {AssetDetailsComponent} from "../../partials/asset-details/asset-details.component";

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
    height = null;
    assets : Asset[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: AssetDetailsComponent
    };
    private gridApi;
    private gridColumnApi;
    constructor(private assetApi: AssetService) { }

    ngOnInit() {
        this.assetSubs = this.assetApi.getAssets().subscribe(res => {
            this.assets = res['assets'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.height = this.assets.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 330;
            w = w/9;
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Description', field: 'description', width: w},
                {headerName: 'Description_det', field: 'description_det', width: w},
                {headerName: 'Inventory Qt', field: 'inventory_qt', width: w},
                {headerName: 'Cost Price Unit', field: 'cost_price_unit', width: w},
                {headerName: 'Acquisition Date', field: 'acquisition_date', width: w},
                {headerName: 'Start Depr Date', field: 'start_depr_date', width: w},
                {headerName: 'Expiration Depr Date', field: 'expiration_depr_date', width: w},
                {headerName: 'Branch', field: 'branch_id', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
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

    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
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
