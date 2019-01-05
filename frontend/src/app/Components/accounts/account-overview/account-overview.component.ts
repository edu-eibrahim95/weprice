import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {AccountService} from "../../../Services/account.service";
import * as $ from 'jquery';
import {AccountDetailsComponent} from "../../partials/account-details/account-details.component";

@Component({
    selector: 'app-account-overview',
    templateUrl: './account-overview.component.html',
    styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {
    accountsSubs: Subscription;
    accounts : Account[];
    columnDefs = [];
    rowData = [];
    add = false;
    edit = false;
    delete = false;
    private gridApi;
    private gridColumnApi;

    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: AccountDetailsComponent
    };

    constructor(private accountsApi: AccountService) { }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 330;
            w = w/10;
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Code', field: 'code', width: w},
                {headerName: 'Description', field: 'description', width: w },
                {headerName: 'Type', field: 'type', width: w},
                {headerName: 'Nat', field: 'nat', width: w},
                {headerName: 'Exp Type', field: 'expense_type', width: w},
                {headerName: 'Abs Type', field: 'expense_abs_type', width: w},
                {headerName: 'Exp Lim', field: 'expense_limit_pct', width: w},
                {headerName: 'Exp Var', field: 'expense_var_pct', width: w},
                {headerName: 'Avg Month', field: 'months_qt_avg', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.accounts.length; i++){
                this.accounts[i]['details'] = {
                    'row_id': i,
                    'id': this.accounts[i].id,
                    'gridApi' : this.gridApi,
                    'gridColumnApi': this.gridColumnApi
                };
                this.accounts[i]['actions'] = {
                    'self' : this,
                    'id':this.accounts[i].id,
                    'delete': [this.delete, this.deleteBranch],
                    'edit': [this.edit, '/accounts/edit/']
                };
            }
            this.rowData = this.accounts;
        });
    }

    massDeleteAccounts() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.accountsSubs = this.accountsApi.deleteAccount('mass', parameter).subscribe(res => {
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

    deleteBranch (id, type, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.accountsSubs = self.accountsApi.deleteAccount(id, parameter).subscribe(res => {
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
