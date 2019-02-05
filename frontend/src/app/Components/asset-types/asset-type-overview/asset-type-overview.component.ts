import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AssetType} from "../../../Models/asset_type";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {AssetTypeService} from "../../../Services/asset-type.service";
import * as $ from 'jquery';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

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
    add = false;
    edit = false;
    delete = false;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private assetTypesApi : AssetTypeService, private translate: TranslateService,private titleService: Title) { }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
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
            this.columnDefs = [
                {headerName: 'Description', field: 'description'},
                {headerName: 'Years Lifetime', field: 'years_lifetime' },
                {headerName: 'Residual Lifetime', field: 'residual_lifetime'},
                {headerName: 'Interest Year Pct', field: 'interest_year_pct'},
                {headerName: 'Account', field: 'account_name'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
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
        let c = this;
        $(document).ready(function () {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("asset_add.type") );
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
