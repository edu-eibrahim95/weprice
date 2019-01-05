import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AssetType} from "../../../Models/asset_type";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {AssetTypeService} from "../../../Services/asset-type.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-asset-type-overview',
    templateUrl: './asset-type-overview.component.html',
    styleUrls: ['./asset-type-overview.component.css']
})
export class AssetTypeOverviewComponent implements OnInit {

    assetTypesSubs: Subscription;
    assetTypes : AssetType[];
    columnDefs = [];
    rowData = [];
    height = null;
    add = false;
    edit = false;
    delete = false;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private assetTypesApi : AssetTypeService) { }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit() {
        this.assetTypesSubs = this.assetTypesApi.getAssetTypes().subscribe(res => {
            this.assetTypes = res['asset_types'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.height = this.assetTypes.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 220;
            w = w/6;
            this.columnDefs = [
                {headerName: 'Description', field: 'description', width: w},
                {headerName: 'Years Lifetime', field: 'years_lifetime', width: w },
                {headerName: 'Residual Lifetime', field: 'residual_lifetime', width: w},
                {headerName: 'Interest Year Pct', field: 'interest_year_pct', width: w},
                {headerName: 'Account', field: 'account_id', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.assetTypes.length; i++){
                this.assetTypes[i]['actions'] = {
                    'id':this.assetTypes[i].id,
                    'delete': [this.delete, this.deleteAssetType],
                    'edit': [this.edit, '/asset_types/edit/'],
                    'self':this
                };
            }
            this.rowData = this.assetTypes;
        });
    }

    massDeleteAssetTypes() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.assetTypesSubs = this.assetTypesApi.deleteAssetType('mass', parameter).subscribe(res => {
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

    deleteAssetType(id, assetTypesApi, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.assetTypesSubs = self.assetTypesApi.deleteAssetType(id, parameter).subscribe(res => {
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
