import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-rendrer.component";
import {ProductService} from "../../../Services/product.service";
import * as $ from 'jquery';


@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

 productSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    height = null;
    products : Product[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private productApi: ProductService) { }

    ngOnInit() {
        this.productSubs = this.productApi.getProducts().subscribe(res => {
            this.products = res['products'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.height = this.products.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 220;
            w = w/10;
            this.columnDefs = [
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
                this.products[i]['details'] = {'id': i,'gridApi' : this.gridApi, 'gridColumnApi': this.gridColumnApi};
                this.products[i]['actions'] = {
                    'api' : this.productApi,
                    'id':this.products[i].id,
                    'delete': [this.delete, this.deleteProduct],
                    'edit': [this.edit, '/products/edit/'] };
            }
            this.rowData = this.products;
        });

    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    deleteProduct(id, productApi) {
        let product = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.productSubs = productApi.deleteProduct(id, product).subscribe(res => {
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
