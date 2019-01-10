import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActionsFormatterComponent} from "../action-cell-rendrer/action-cell-renderer.component";
import {ProductService} from "../../../Services/product.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    node = null;
    productsSubs: Subscription;
    master_raw_id = null;
    product_id = null;
    taxes_options = {};
    columnDefs = [];
    rowData = [{id: 0, purchase_pct: '0', check: 'Add new ', name: 0, sale_pct: 0}];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };

    private gridApi;
    private productGridApi;
    private gridColumnApi;
    private productGridColumnApi;
    constructor(private productsApi: ProductService) { }

    ngOnInit() {
        $(document).ready(function () {
            let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
            $('.details').width(w)
        })
    }

    onGridReady(params) {
        this.productGridApi = params.api;
        this.productGridColumnApi = params.columnApi;
    }

    agInit(params: any): void {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.product_id = params.value.id;
    }

    static extractValues(mappings) {
        return Object.keys(mappings);
    }
    static lookupValue(mappings, key) {
        return mappings[key];
    }
    static lookupKey(mappings, name) {
        for (let key in mappings) {
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
                this.productsSubs = this.productsApi.getProductTaxes(this.product_id).subscribe(res => {
                    ///////////////////////////////////////
                    this.taxes_options = res['taxes'];
                    let c = this;
                    this.columnDefs = [
                        {
                            headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Tax Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: ProductDetailsComponent.extractValues(c.taxes_options)
                            },
                            valueFormatter: function (params) {
                                return ProductDetailsComponent.lookupValue(c.taxes_options, params.value);
                            },
                            valueParser: function (params) {
                                return ProductDetailsComponent.lookupKey(c.taxes_options, params.newValue);
                            }
                        },
                        {headerName: 'On Purchase %', field: 'purchase_pct', editable: true, width: 100},
                        {headerName: 'On Sale %', field: 'sale_pct', editable: true, width: 100},
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
                    ];
                    this.rowData = this.rowData.concat(res['products']);
                    for (let i = 0; i < this.rowData.length; i++) {
                        this.rowData[i]['actions'] = {
                            api: this.productsApi,
                            id: this.rowData[i].id,
                            delete: [(i != 0), this.deleteTaxes],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'product_taxes',
                            self: this
                        };
                    }
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    this.gridApi.onRowHeightChanged();
                    this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                t.removeClass('invisible');
                this.gridApi.onRowHeightChanged();
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
        let nodes = this.productGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids: ids};
            if (confirm("Are You Sure")) {
                this.productsSubs = this.productsApi.deleteProductTaxes(this.product_id,parameter, 'mass').subscribe(res => {
                        if (res == 1) {
                            this.rowData = this.rowData.filter(row => !( ids.includes(row.id)));
                            this.productGridApi.setRowData(this.rowData);
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
    deleteTaxes(id, type, self) {
        if(confirm("Are You Sure")) {
            self.productsSubs = self.productsApi.deleteProductTaxes(self.product_id, {},  id).subscribe(res => {
                    if (res == 1 ) {
                        self.rowData = self.rowData.filter(row => row.id != id);
                        self.productGridApi.setRowData(self.rowData);
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
        let parameters = {'tax_id': row.name, 'purchase_pct': row.purchase_pct, 'name':row.name, 'sale_pct': row.sale_pct};
        if(id == 0){
            self.productsSubs = self.productsApi.addProductTaxes(self.product_id, parameters).subscribe(res => {
                    if (res > 0 ){
                        parameters['id'] = res;
                        parameters['actions'] = {
                            api : self.productsApi,
                            id:res,
                            delete: [true, self.deleteRatio],
                            edit: [false, ''],
                            save: [true, self.save],
                            type: 'ratio',
                            self: self
                        };
                        self.rowData.push(parameters);
                        self.productGridApi.setRowData(self.rowData);
                        self.resetHeight();
                        return false;
                    }
                },
                console.error
            );
        }
        else {
            self.productsSubs = self.productsApi.editProductTaxes(self.product_id, parameters, id).subscribe(res => {
                    if (res == 0 ){
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
