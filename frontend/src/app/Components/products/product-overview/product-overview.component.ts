import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {ProductService} from "../../../Services/product.service";
import * as $ from 'jquery';
import {ProductDetailsComponent} from "../../partials/product-details/product-details.component";
import {ActivatedRoute, Event, NavigationEnd, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";


@Component({
    selector: 'app-product-overview',
    templateUrl: './product-overview.component.html',
    styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit{

    productSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    products : Product[];
    type: null;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: ProductDetailsComponent
    };
    private gridApi;
    private gridColumnApi;
    constructor(private productApi: ProductService, private route: ActivatedRoute, private router: Router,private translate: TranslateService) { }
    init() {
        if (this.route.params['value']['type'])
            this.type = this.route.params['value']['type'];
        this.productSubs = this.productApi.getProducts(this.type).subscribe(res => {
            this.products = res['products'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Name', field: 'name'},
                {headerName: 'Description', field: 'description' },
                {headerName: 'Type', field: 'type', cellRendererParams: {c: this}, cellRenderer: function(params) {
                        let c = params.c;
                        if (params.value == 0){
                            return c.translate.instant("producta.simple")
                        }
                        else if (params.value == 1){
                            return c.translate.instant("producta.comp")
                        }
                    }},
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
                {headerName: 'Internal Code', field: 'internal_code'},
                {headerName: 'Unit', field: 'unit'},
                {headerName: 'Currency Type', field: 'currency_type'},
                {headerName: 'Cost Price', field: 'cost_price'},
                {headerName: 'Sale Price', field: 'sale_price'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.products.length; i++){
                this.products[i]['details'] = {
                    'id': this.products[i].id,
                    'row_id': i,
                    'gridApi' : this.gridApi,
                    'gridColumnApi': this.gridColumnApi
                };
                this.products[i]['actions'] = {
                    'self' : this,
                    'id':this.products[i].id,
                    'delete': [this.delete, this.deleteProduct],
                    'edit': [this.edit, '/products/edit/'] };
            }
            this.rowData = this.products;
        });
    }
    ngOnInit() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd ) {
                this.init()
            }
        });
        this.init()
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

    deleteProduct(id, type, self) {
        let product = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.productSubs = self.productApi.deleteProduct(id, product).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    massDeleteProduct() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let product = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.productSubs = this.productApi.deleteProduct('mass', product).subscribe(res => {
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
