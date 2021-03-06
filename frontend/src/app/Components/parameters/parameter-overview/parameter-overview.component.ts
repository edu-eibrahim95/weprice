import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Parameter} from "../../../Models/parameter";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {ParameterService} from "../../../Services/parameter.service";
import * as $ from 'jquery';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-parameter-overview',
    templateUrl: './parameter-overview.component.html',
    styleUrls: ['./parameter-overview.component.css']
})
export class ParameterOverviewComponent implements OnInit {

    parameterSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    parameters : Parameter[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private parameterApi: ParameterService, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.parameterSubs = this.parameterApi.getParameters().subscribe(res => {
            this.parameters = res['parameters'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: 'Attribute', field: 'attribute'},
                {headerName: 'Description', field: 'description' },
                {headerName: 'Default Value', field: 'default_value'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.parameters.length; i++){
                this.parameters[i]['details'] = {'id': i,'gridApi' : this.gridApi, 'gridColumnApi': this.gridColumnApi};
                this.parameters[i]['actions'] = {
                    'self' : this,
                    'id':this.parameters[i].id,
                    'delete': [this.delete, this.deleteParameter],
                    'edit': [this.edit, '/parameters/edit/'] };
            }
            this.rowData = this.parameters;
        });
        let c = this;
        $(document).ready(function (){
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("paramo.param") );
        });
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    deleteParameter(id, type, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.parameterSubs = self.parameterApi.deleteParameter(id, parameter).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    massDeleteParameter() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.parameterSubs = this.parameterApi.deleteParameter('mass', parameter).subscribe(res => {
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
