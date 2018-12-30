import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-rendrer.component";
import {AccountService} from "../../../Services/account.service";
import * as $ from 'jquery';

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
    height = null;
    add = false;
    edit = false;
    delete = false;
    private gridApi;
    private gridColumnApi;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
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
            this.height = this.accounts.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 220;
            w = w/10;
            this.columnDefs = [
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
                this.accounts[i]['actions'] = {'api' : this.accountsApi,'id':this.accounts[i].id, 'delete': [this.delete, this.deleteBranch], 'edit': [this.edit, '/accounts/edit/'] };
            }
            this.rowData = this.accounts;
            $('ag-grid-angular').height(this.height);
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

    deleteBranch (id, accountsApi) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.accountsSubs = accountsApi.deleteAccount(id, parameter).subscribe(res => {
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
