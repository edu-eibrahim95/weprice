import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../../Models/user";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {UserService} from "../../../Services/user.service";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-user-overview',
    templateUrl: './user-overview.component.html',
    styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

    userSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    users : User[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private userApi: UserService, private translate: TranslateService) { }

    ngOnInit() {
        this.userSubs = this.userApi.getUsers().subscribe(res => {
            this.users = res['users'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: 'Name', field: 'name'},
                {headerName: 'Full Name', field: 'full_name'},
                {headerName: 'Email ', field: 'email'},
                {headerName: 'Active ', field: 'active_flag', cellRendererParams: {c: this}, cellRenderer: function(params) {
                        let c = params.c;
                        if (params.value == 0){
                            return c.translate.instant("usero.not_active")
                        }
                        else if (params.value == 1){
                            return c.translate.instant("usero.active")
                        }
                    }},
                {headerName: 'Initial Date', field: 'initial_date'},
                {headerName: 'Final Date ', field: 'final_date'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.users.length; i++){
                this.users[i]['details'] = {'id': i,'gridApi' : this.gridApi, 'gridColumnApi': this.gridColumnApi};
                this.users[i]['actions'] = {
                    'api' : this.userApi,
                    'id':this.users[i].id,
                    'delete': [this.delete, this.deleteUser],
                    'edit': [this.edit, '/users/edit/'] };
            }
            this.rowData = this.users;
        });

    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    deleteUser(id, userApi) {
        let user = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.userSubs = userApi.deleteUser(id, user).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    massDeleteUser() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let user = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.userSubs = this.userApi.deleteUser('mass', user).subscribe(res => {
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
