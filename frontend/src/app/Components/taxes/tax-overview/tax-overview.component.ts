import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Tax} from "../../../Models/tax";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-rendrer.component";
import {TaxService} from "../../../Services/tax.service";
import * as $ from 'jquery';
import {AccountService} from "../../../Services/account.service";

@Component({
    selector: 'app-tax-overview',
    templateUrl: './tax-overview.component.html',
    styleUrls: ['./tax-overview.component.css']
})
export class TaxOverviewComponent implements OnInit {
    taxesSubs: Subscription;
    taxes : Tax[];
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
    constructor(private taxesApi : TaxService) { }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit() {
        this.taxesSubs = this.taxesApi.getTaxes().subscribe(res => {
            this.taxes = res['taxes'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.height = this.taxes.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 220;
            w = w/7;
            this.columnDefs = [
                {headerName: 'Name', field: 'name', width: w},
                {headerName: 'Initial Date', field: 'initial_date', width: w },
                {headerName: 'Final Date', field: 'final_date', width: w},
                {headerName: 'Purchase Pct', field: 'purchase_pct', width: w},
                {headerName: 'Sale Pct', field: 'sale_pct', width: w},
                {headerName: 'Account', field: 'account_id', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.taxes.length; i++){
                this.taxes[i]['actions'] = {'api' : this.taxesApi,'id':this.taxes[i].id, 'delete': [this.delete, this.deleteTax], 'edit': [this.edit, '/taxes/edit/'] };
            }
            this.rowData = this.taxes;
            $('ag-grid-angular').height(this.height);
        });
    }

    massDeleteTaxes() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.taxesSubs = this.taxesApi.deleteTax('mass', parameter).subscribe(res => {
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

    deleteTax(id, taxesApi) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.taxesSubs = taxesApi.deleteTax(id, parameter).subscribe(res => {
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
