import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {EntryAccount} from "../../../Models/entry_account";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {EntryAccountService} from "../../../Services/entry-account.service";
import {TranslateService} from "@ngx-translate/core";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-entry-account-overview',
    templateUrl: './entry-account-overview.component.html',
    styleUrls: ['./entry-account-overview.component.css']
})
export class EntryAccountOverviewComponent implements OnInit {
    accountsSubs: Subscription;
    accounts : Account[];
    entryAccountsSubs: Subscription;
    entryAccounts : EntryAccount[];
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
    constructor(private entryAccountsApi : EntryAccountService, private translate: TranslateService, private accountsApi: AccountService, private router: Router) { }

    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        this.entryAccountsSubs = this.entryAccountsApi.getEntryAccounts().subscribe(res => {
            this.entryAccounts = res['entry_accounts'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: 'Type', field: 'type',cellRendererParams: {c: this}, cellRenderer: function(params) {
                        let c = params.c;
                        if (params.value == 0){
                            return c.translate.instant("entry_accounts.expense")
                        }
                        else if (params.value == 1){
                            return c.translate.instant("entry_accounts.revenue")
                        }
                    } },
                {headerName: 'Reference Date', field: 'reference_date' },
                {headerName: 'Due Date', field: 'due_date'},
                {headerName: 'Payment Date', field: 'payment_date'},                
                {headerName: 'Historic', field: 'historic'},
                {headerName: 'Entry Value', field: 'entry_value'},
                {headerName: 'Account', field: 'account_name'},
                {headerName: 'Cost Center', field: 'cost_center_name',cellRendererParams: {c: this}, cellRenderer: function(params) {
                        let c = params.c;
                        console.log(params);
                        if (params.value == null){
                            return "-";
                        }
                        else{
                            return params.value;
                        }
                    }},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.entryAccounts.length; i++){
                this.entryAccounts[i]['actions'] = {
                    'self' : this,
                    'id':this.entryAccounts[i].id,
                    'delete': [this.delete, this.deleteEntryAccount],
                    'edit': [this.edit, '/entry_accounts/edit/']
                };
            }
            this.rowData = this.entryAccounts;
        });
    }

    massDeleteEntryAccounts() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.entryAccountsSubs = this.entryAccountsApi.deleteEntryAccount('mass', parameter).subscribe(res => {
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

    deleteEntryAccount(id, type, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.entryAccountsSubs = self.entryAccountsApi.deleteEntryAccount(id, parameter).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.entryAccountsSubs = this.entryAccountsApi.getEntryAccounts(parameter).subscribe(res => {
            this.entryAccounts = res['entry_accounts'];
            for (let i=0; i<this.entryAccounts.length; i++){
                this.entryAccounts[i]['actions'] = {
                    'self' : this,
                    'id':this.entryAccounts[i].id,
                    'delete': [this.delete, this.deleteEntryAccount],
                    'edit': [this.edit, '/entry_accounts/edit/']
                };
            }
            this.rowData = this.entryAccounts;
            this.gridApi.setRowData(this.rowData);
        });
        return false;
    }
}
