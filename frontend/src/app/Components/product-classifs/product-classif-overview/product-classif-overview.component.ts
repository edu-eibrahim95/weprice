import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ProductClassif} from "../../../Models/product_classif";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {ProductClassifService} from "../../../Services/product-classif.service";
import * as $ from 'jquery';
import {ProductClassifDetailsComponent} from "../../partials/product-classif-details/product-classif-details.component";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-product-classif-overview',
    templateUrl: './product-classif-overview.component.html',
    styleUrls: ['./product-classif-overview.component.css']
})
export class ProductClassifOverviewComponent implements OnInit {


    productClassifSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    productClassifs : ProductClassif[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: ProductClassifDetailsComponent
    };
    private gridApi;
    private gridColumnApi;
    constructor(private productClassifApi: ProductClassifService, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.productClassifSubs = this.productClassifApi.getProductClassifs().subscribe(res => {
            this.productClassifs = res['products_classifs'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Product Group', field: 'product_group', cellRendererParams: {c: this}, cellRenderer: function(params) {
                        let c = params.c;
                        if (params.value == 0){
                            return c.translate.instant("classa.raw")
                        }
                        else if (params.value == 1){
                            return c.translate.instant("classa.finish")
                        }
                        else if (params.value == 2){
                            return c.translate.instant("classa.semi")
                        }
                        else if (params.value == 3){
                            return c.translate.instant("classa.res")
                        }
                        else if (params.value == 4){
                            return c.translate.instant("classa.pack")
                        }
                    }},
                {headerName: 'Description', field: 'description' },
                {headerName: 'Initial Flag', field: 'initial_flag'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.productClassifs.length; i++){
                this.productClassifs[i]['details'] = {
                    'id': this.productClassifs[i].id,
                    'row_id': i,
                    'gridApi' : this.gridApi,
                    'gridColumnApi': this.gridColumnApi
                };
                this.productClassifs[i]['actions'] = {
                    'self': this,
                    'api' : this.productClassifApi,
                    'id':this.productClassifs[i].id,
                    'delete': [this.delete, this.deleteProductClassif],
                    'edit': [this.edit, '/product_classifs/edit/'] };
            }
            this.rowData = this.productClassifs;
        });
        let c = this;
        $(document).ready(function () {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("classo.prod") );
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

    deleteProductClassif(id, productClassifApi, self) {
        let productClassif = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.productClassifSubs = self.productClassifApi.deleteProductClassif(id, productClassif).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    massDeleteProductClassif() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let productClassif = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.productClassifSubs = this.productClassifApi.deleteProductClassif('mass', productClassif).subscribe(res => {
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
