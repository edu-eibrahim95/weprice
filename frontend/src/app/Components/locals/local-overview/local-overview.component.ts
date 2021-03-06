import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Local} from "../../../Models/local";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {LocalService} from "../../../Services/local.service";
import * as $ from 'jquery';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-local-overview',
    templateUrl: './local-overview.component.html',
    styleUrls: ['./local-overview.component.css']
})
export class LocalOverviewComponent implements OnInit {

    localsSubs: Subscription;
    locals : Local[];
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
    constructor(private localsApi : LocalService, private translate: TranslateService,private titleService: Title) { }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit() {
        this.localsSubs = this.localsApi.getLocals().subscribe(res => {
            this.locals = res['locals'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: 'Description', field: 'description' },
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.locals.length; i++){
                this.locals[i]['actions'] = {
                    'api' : this.localsApi,
                    'id':this.locals[i].id,
                    'delete': [this.delete, this.deleteLocal],
                    'edit': [this.edit, '/locals/edit/'] ,
                    'self':this
                };
            }
            this.rowData = this.locals;
        });
        let c = this;
        $(document).ready(function() {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("localo.local") );
        });
    }

    massDeleteLocals() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.localsSubs = this.localsApi.deleteLocal('mass', parameter).subscribe(res => {
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

    deleteLocal(id, localsApi, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.localsSubs = self.localsApi.deleteLocal(id, parameter).subscribe(res => {
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
