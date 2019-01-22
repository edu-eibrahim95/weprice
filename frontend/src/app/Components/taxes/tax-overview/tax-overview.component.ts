import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Tax} from "../../../Models/tax";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {TaxService} from "../../../Services/tax.service";
import * as $ from 'jquery';

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
    add = false;
    edit = false;
    delete = false;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private taxesApi : TaxService) { }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
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
            this.columnDefs = [
                {headerName: 'Name', field: 'name'},
                {headerName: 'Initial Date', field: 'initial_date' },
                {headerName: 'Final Date', field: 'final_date'},
                {headerName: 'Purchase Pct', field: 'purchase_pct'},
                {headerName: 'Sale Pct', field: 'sale_pct'},
                {headerName: 'Account', field: 'account_name'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.taxes.length; i++){
                this.taxes[i]['actions'] = {
                    'self' : this,
                    'id':this.taxes[i].id,
                    'delete': [this.delete, this.deleteTax],
                    'edit': [this.edit, '/taxes/edit/']
                };
            }
            this.rowData = this.taxes;
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

    deleteTax(id, type, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.taxesSubs = self.taxesApi.deleteTax(id, parameter).subscribe(res => {
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
