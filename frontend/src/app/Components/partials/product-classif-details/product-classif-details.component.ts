import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActionsFormatterComponent} from "../action-cell-rendrer/action-cell-renderer.component";
import * as $ from 'jquery';
import {ProductClassifService} from "../../../Services/product-classif.service";

@Component({
    selector: 'app-product-classif-details',
    templateUrl: './product-classif-details.component.html',
    styleUrls: ['./product-classif-details.component.css']
})
export class ProductClassifDetailsComponent implements OnInit {

    productClassifsSubs: Subscription;
    master_raw_id = null;
    product_id = null;
    taxes_options = {};
    subs_options = {};
    subsColumnDefs = [];
    taxesColumnDefs = [];
    subsRowData = [{id: 0, name: "0", check: 'Add new '}];
    taxesRowData = [{id: 0, purchase_pct: '0', check: 'Add new ', name: '0', sale_pct: '0'}];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };

    private gridApi;
    private gridColumnApi;
    private taxGridColumnApi;
    private taxGridApi;
    private subGridApi;
    private subGridColumnApi;
    constructor(private productClassifsApi: ProductClassifService) { }

    onTaxGridReady(params) {
        this.taxGridApi = params.api;
        this.taxGridColumnApi = params.columnApi;
    }

    ngOnInit() {
        $(document).ready(function () {
            let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
            $('.details').width(w)
        })
    }

    onSubsGridReady(params) {
        this.subGridApi = params.api;
        this.subGridColumnApi = params.columnApi;
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
        for (var key in mappings) {
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
        let node = this.gridApi.getRowNode(this.master_raw_id);
        let t = $('#tab-details-'+this.master_raw_id);
        let bar = t.find('.mat-ink-bar');
        if(toggle.hasClass('collapsed-toggle')) {
            if (this.subsRowData.length == 1){
                this.productClassifsSubs = this.productClassifsApi.getProductSubs(this.product_id).subscribe(res => {
                    ///////////////////////////////////////
                    this.subs_options = res['product_classifs_data'];
                    let c = this;
                    this.subsColumnDefs = [
                        {
                            headerName: '', field: 'check', checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Product Classif',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: ProductClassifDetailsComponent.extractValues(c.subs_options)
                            },
                            valueFormatter: function (params) {
                                return ProductClassifDetailsComponent.lookupValue(c.subs_options, params.value);
                            },
                            valueParser: function (params) {
                                return ProductClassifDetailsComponent.lookupKey(c.subs_options, params.newValue);
                            }
                        },
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
                    ];
                    this.subsRowData = this.subsRowData.concat(res['product_classifs_subs_data']);
                    for (let i = 0; i < this.subsRowData.length; i++) {
                        this.subsRowData[i]['actions'] = {
                            api: this.productClassifsApi,
                            id: this.subsRowData[i].id,
                            delete: [(i != 0), this.deleteProductClassifSubs],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'subs',
                            self: this
                        };
                    }
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    this.productClassifsSubs = this.productClassifsApi.getProductTaxes(this.product_id).subscribe(res => {
                        this.taxes_options = res['taxes'];
                        let c = this;
                        this.taxesColumnDefs = [
                            {
                                headerName: '', field: 'check', checkboxSelection: function (params) {
                                    return (params.node.id != 0);
                                }
                            },
                            {
                                headerName: 'Tax Name',
                                field: 'name',
                                editable: true,
                                cellEditor: 'agSelectCellEditor',
                                cellEditorParams: {
                                    values: ProductClassifDetailsComponent.extractValues(c.taxes_options)
                                },
                                valueFormatter: function (params) {
                                    return ProductClassifDetailsComponent.lookupValue(c.taxes_options, params.value);
                                },
                                valueParser: function (params) {
                                    return ProductClassifDetailsComponent.lookupKey(c.taxes_options, params.newValue);
                                }
                            },
                            {headerName: 'On Purchase %', field: 'purchase_pct', editable: true},
                            {headerName: 'On Sale %', field: 'sale_pct', editable: true},
                            {
                                headerName: 'Actions',
                                field: 'actions',
                                cellRenderer: 'actionsFormatterComponent'
                            },
                        ];
                        this.taxesRowData = this.taxesRowData.concat(res['product_classifs']);
                        for (let i = 0; i < this.taxesRowData.length; i++) {
                            this.taxesRowData[i]['actions'] = {
                                api: this.productClassifsApi,
                                id: this.taxesRowData[i].id,
                                delete: [(i != 0), this.deleteProductClassifSubs],
                                edit: [false, ''],
                                save: [true, this.save],
                                type: 'taxes',
                                self: this
                            };
                        }
                        ///////////////////////////////////////////////////////////////////////////////////////////////////
                    });

                });
            }
            toggle.removeClass('collapsed-toggle');
            toggle.addClass('expanded-toggle');
            angle.removeClass('fa-angle-down');
            angle.addClass('fa-angle-up');
            let r = this.subsRowData.length;
            t.removeClass('invisible');
            bar.css('display', 'block');
            node.setRowHeight((r*25)+300);
            this.gridApi.onRowHeightChanged();

        }
        else {
            node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            bar.css('display', 'none');
            t.addClass('invisible');
        }
    }
    massDeleteSubs(type) {
        let rowData = null;
        let grid = null;
        if(type == 'subs'){
            rowData = this.subsRowData;
            grid = this.subGridApi;

        }
        else if (type == 'taxes'){
            rowData = this.taxesRowData;
            grid = this.taxGridApi;
        }
        let nodes = grid.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids: ids};
            if (confirm("Are You Sure")) {

                this.productClassifsSubs = this.productClassifsApi.deleteProductClassifSubs(type, this.product_id,parameter, 'mass').subscribe(res => {
                        if (res == 1) {
                            rowData = rowData.filter(row => !( ids.includes(row.id)));
                            grid.setRowData(rowData);
                        }
                    },
                    console.error
                );
                return false;
            }
        }
        return false;

    }
    deleteProductClassifSubs(id, type, self) {
        if(confirm("Are You Sure")) {
            let rowData = null;
            let grid = null;
            if(type == 'subs'){
                rowData = self.subsRowData;
                grid = self.subGridApi;

            }
            else if (type == 'taxes'){
                rowData = self.taxesRowData;
                grid = self.taxGridApi;
            }
            self.productClassifsSubs = self.productClassifsApi.deleteProductClassifSubs(type, self.product_id, {},  id).subscribe(res => {
                    if (res == 1 ) {
                        rowData = rowData.filter(row => row.id != id);
                        grid.setRowData(rowData);
                    }
                },
                console.error
            );
            return false;
        }

    }
    save(id, type, self) {
        let rowData = null;
        let grid = null;
        let parameters = {};
        if(type == 'subs'){
            rowData = self.subsRowData;
            grid = self.subGridApi;
            let row = rowData.filter(row => row.id == id)[0];
            parameters = {'product_classification_id': row.name, 'name':row.name};

        }
        else if (type == 'taxes'){
            rowData = self.taxesRowData;
            grid = self.taxGridApi;
            let row = rowData.filter(row => row.id == id)[0];
            console.log(row);
            parameters = {'tax_id': row.name, 'name':row.name, 'purchase_pct':row.purchase_pct, 'sale_pct':row.sale_pct};

        }
        if(id == 0){
            self.productClassifsSubs = self.productClassifsApi.addProductClassifSubs(type, self.product_id, parameters).subscribe(res => {
                    if (res > 0 ){
                        parameters['id'] = res;
                        parameters['actions'] = {
                            api: self.productClassifsApi,
                            id:res,
                            delete: [true, self.deleteProductClassifSubs],
                            edit: [false, ''],
                            save: [true, self.save],
                            type: type,
                            self: self
                        };
                        rowData.push(parameters);
                        grid.setRowData(rowData);
                        return false;
                    }
                },
                console.error
            );
        }
        else {
            self.productClassifsSubs = self.productClassifsApi.editProductClassifSubs(type, self.product_id, parameters, id).subscribe(res => {
                    if (res == 0 ){
                        return false;
                    }
                },
                console.error
            );
        }

        return false;
    }


}
