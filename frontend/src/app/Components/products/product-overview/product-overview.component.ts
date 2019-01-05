import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {ProductService} from "../../../Services/product.service";
import * as $ from 'jquery';
import {ProductDetailsComponent} from "../../partials/product-details/product-details.component";
import {ActivatedRoute, Event, NavigationEnd, Router} from "@angular/router";


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
    height = null;
    products : Product[];
    type: null;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: ProductDetailsComponent
    };
    private gridApi;
    private gridColumnApi;
    constructor(private productApi: ProductService, private route: ActivatedRoute, private router: Router,) { }
    init() {
        if (this.route.params['value']['type'])
            this.type = this.route.params['value']['type'];
        this.productSubs = this.productApi.getProducts(this.type).subscribe(res => {
            this.products = res['products'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.height = this.products.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 330;
            w = w/10;
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Name', field: 'name', width: w},
                {headerName: 'Description', field: 'description', width: w },
                {headerName: 'Type', field: 'type', width: w},
                {headerName: 'Product Group', field: 'product_group', width: w},
                {headerName: 'Internal Code', field: 'internal_code', width: w},
                {headerName: 'Unit', field: 'unit', width: w},
                {headerName: 'Currency Type', field: 'currency_type', width: w},
                {headerName: 'Cost Price', field: 'cost_price', width: w},
                {headerName: 'Sale Price', field: 'sale_price', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
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
