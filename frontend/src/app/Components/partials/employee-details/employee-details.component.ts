import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActionsFormatterComponent} from "../action-cell-rendrer/action-cell-renderer.component";
import {EmployeeService} from "../../../Services/employee.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    employeesSubs: Subscription;
    master_raw_id = null;
    node = null;
    employee_id = null;
    cost_center_options = {};
    columnDefs = [];
    rowData = [];
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };

    private gridApi;
    private employeeGridApi;
    private gridColumnApi;
    private employeeGridColumnApi;
    constructor(private employeesApi: EmployeeService) { }

    ngOnInit() {
        $(document).ready(function () {
            let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
            $('.details').width(w)
        })
    }

    onGridReady(params) {
        this.employeeGridApi = params.api;
        this.employeeGridColumnApi = params.columnApi;
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    agInit(params: any): void {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.employee_id = params.value.id;
    }

    static extractValues(mappings) {
        return Object.keys(mappings);
    }
    static lookupValue(mappings, key) {
        return mappings[key];
    }

    static lookupKey(mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    }


    toggleDetails() {
        let toggle = $('.details-toggle-'+this.master_raw_id);
        let angle = toggle.find('i');
        let t = $('#tab-details-'+this.master_raw_id);
        if(toggle.hasClass('collapsed-toggle')) {
            if (this.rowData.length == 0){
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.employeesSubs = this.employeesApi.getEmployeeCostCenters(this.employee_id).subscribe(res => {
                    ///////////////////////////////////////
                    this.cost_center_options = res['cost_center_options'];
                    let c = this;
                    this.columnDefs = [
                        // {
                        //     headerName: '', field: 'check',width: 70, checkboxSelection: function (params) {
                        //         return (params.node.id != 0);
                        //     }
                        // },
                        {
                            headerName: 'Cost Center Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: EmployeeDetailsComponent.extractValues(c.cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return EmployeeDetailsComponent.lookupValue(c.cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return EmployeeDetailsComponent.lookupKey(c.cost_center_options, params.newValue);
                            }
                        },
                        {headerName: 'Rating %', field: 'rating_pct',width: 70,  editable: true, valueSetter: function(params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            }},
                        {headerName: 'Direct Labor %', field: 'direct_labor_pct', width: 100, editable: true, valueSetter: function(params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            }},
                        {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
                    ];
                    let exists = res['cost_centers'].map(j => parseInt(j.name));
                    for (let i=0; i<Object.keys(this.cost_center_options).length; i++){
                        let id = parseInt(Object.keys(this.cost_center_options)[i].replace(/'/g, ''));
                        if( id != 0 && ! exists.includes(id)){
                            this.rowData.push({id : 0, name: id, rating_pct: '0', direct_labor_pct:0,check: "Add New"});
                        }
                    }
                    // {id: 0, rating_pct: '0', check: 'Add new ', name: 0, direct_labor_pct:0}
                    this.rowData = this.rowData.concat(res['cost_centers']);
                    for (let i = 0; i < this.rowData.length; i++) {
                        this.rowData[i]['actions'] = {
                            api: this.employeesApi,
                            id: this.rowData[i].name,
                            delete: [false, this.deleteCostCenter],
                            edit: [false, ''],
                            save: [true, this.save],
                            type: 'employee_cost_center',
                            self: this
                        };
                    }
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    this.resetHeight();
                });
            }
            toggle.removeClass('collapsed-toggle');
            toggle.addClass('expanded-toggle');
            angle.removeClass('fa-angle-down');
            angle.addClass('fa-angle-up');
            t.removeClass('invisible');
            this.resetHeight();
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
        }
    }
    massDelete() {
        let nodes = this.employeeGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids: ids};
            if (confirm("Are You Sure")) {
                this.employeesSubs = this.employeesApi.deleteEmployeeCostCenter(this.employee_id,parameter, 'mass').subscribe(res => {
                        if (res == 1) {
                            this.rowData = this.rowData.filter(row => !( ids.includes(row.id)));
                            this.employeeGridApi.setRowData(this.rowData);
                            this.resetHeight();
                        }
                    },
                    console.error
                );
                return false;
            }
        }
        return false;
    }
    deleteCostCenter(id, type, self) {
        if(confirm("Are You Sure")) {
            self.employeesSubs = self.employeesApi.deleteEmployeeCostCenter(self.employee_id, {},  id).subscribe(res => {
                    if (res == 1 ) {
                        self.rowData = self.rowData.filter(row => row.id != id);
                        self.employeeGridApi.setRowData(self.rowData);
                        self.resetHeight();
                    }
                },
                console.error
            );
            return false;
        }
    }
    save(id, type, self) {
        let name = 0;
        let row = self.rowData.filter(row => row.name == id)[0];
        id = row.id;
        name = row.name;
        let parameters = {'costcenter_id': row.name, 'rating_pct': row.rating_pct, 'name':row.name, 'direct_labor_pct' : row.direct_labor_pct};
        if(id == 0){
            self.employeesSubs = self.employeesApi.addEmployeeCostCenter(self.employee_id, parameters).subscribe(res => {
                    if (res > 0 ){
                        parameters['id'] = res;
                        parameters['actions'] = {
                            api : self.employeesApi,
                            id:res,
                            delete: [true, self.deleteRatio],
                            edit: [false, ''],
                            save: [true, self.save],
                            type: 'ratio',
                            self: self
                        };
                        let row = self.rowData.filter(row => row.name == name)[0];
                        row.id = res;
                        return false;
                    }
                },
                console.error
            );
        }
        else {
            self.employeesSubs = self.employeesApi.editEmployeeCostCenter(self.employee_id, parameters, id).subscribe(res => {
                    if (res == 1 ){
                        return false;
                    }
                },
                console.error
            );
        }
        return false;
    }

    resetHeight(){
        let r = this.rowData.length;
        this.node.setRowHeight((r*25)+200);
        this.gridApi.onRowHeightChanged();
    }
}
