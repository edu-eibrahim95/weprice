import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../../Models/user";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {UserService} from "../../../Services/user.service";
import * as $ from 'jquery';

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
    height = null;
    users : User[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private userApi: UserService) { }

    ngOnInit() {
        this.userSubs = this.userApi.getUsers().subscribe(res => {
            this.users = res['users'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.height = this.users.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 220;
            w = w/7;
            this.columnDefs = [
                {headerName: 'Name', field: 'name', width: w},
                {headerName: 'Full Name', field: 'full_name', width: w},
                {headerName: 'Email ', field: 'email', width: w},
                {headerName: 'Active ', field: 'active_flag', width: w},
                {headerName: 'Initial Date', field: 'initial_date', width: w},
                {headerName: 'Final Date ', field: 'final_date', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
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
