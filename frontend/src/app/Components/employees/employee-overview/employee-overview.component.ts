import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Employee} from "../../../Models/employee";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {EmployeeService} from "../../../Services/employee.service";
import * as $ from 'jquery';
import {EmployeeDetailsComponent} from "../../partials/employee-details/employee-details.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-employee-overview',
    templateUrl: './employee-overview.component.html',
    styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {

    employeeSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    employees : Employee[];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: EmployeeDetailsComponent
    };
    private gridApi;
    private gridColumnApi;
    constructor(private employeeApi: EmployeeService, private translate: TranslateService) { }

    ngOnInit() {
        this.employeeSubs = this.employeeApi.getEmployees().subscribe(res => {
            this.employees = res['employees'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Name', field: 'name'},
                {headerName: 'Type', field: 'type', cellRendererParams: {c: this}, cellRenderer: function(params) {
                        let c = params.c;
                        if (params.value == 0){
                            return c.translate.instant("employa.stand")
                        }
                        else if (params.value == 1){
                            return c.translate.instant("employa.dire")
                        }
                        else if (params.value == 2){
                            return c.translate.instant("employa.train")
                        }
                    }},
                {headerName: 'Hire Date', field: 'hire_date'},
                {headerName: 'Dismiss Date', field: 'dismiss_date'},
                {headerName: 'Salary', field: 'salary'},
                {headerName: 'Extra Salary', field: 'extra_salary'},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.employees.length; i++){
                this.employees[i]['details'] = {
                    'row_id':i,
                    'id': this.employees[i].id,
                    'gridApi' : this.gridApi,
                    'gridColumnApi': this.gridColumnApi};
                this.employees[i]['actions'] = {
                    'self' : this,
                    'id':this.employees[i].id,
                    'delete': [this.delete, this.deleteEmployee],
                    'edit': [this.edit, '/employees/edit/'] };
            }
            this.rowData = this.employees;
        });

    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
        let w = 7/9 * parseInt($('.ag-theme-material').width());
        $('.details').width(w);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    deleteEmployee(id, type, self) {
        let employee = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.employeeSubs = self.employeeApi.deleteEmployee(id, employee).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    massDeleteEmployee() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let employee = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.employeeSubs = this.employeeApi.deleteEmployee('mass', employee).subscribe(res => {
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
