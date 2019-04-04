import { Component, OnInit } from '@angular/core';
import {CostCenter} from "../../../Models/cost_center";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {Subscription} from "rxjs";
import * as $ from 'jquery';
import {DetailsFormatterComponent} from "../../partials/cost-center-details/cost-center-details.component";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
@Component({
    selector: 'app-cost-center-over-view',
    templateUrl: './cost-center-overview.component.html',
    styleUrls: ['./cost-center-overview.component.css']
})
export class CostCenterOverviewComponent implements OnInit {

    costCenterSubs: Subscription;
    add = false;
    edit = false;
    delete = false;
    columnDefs = [];
    rowData = [];
    cost_centers : CostCenter[];
    private gridApi;
    private gridColumnApi;

    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
        detailsFormatterComponent: DetailsFormatterComponent
    };
    constructor(private costCenterApi: CostCentersService, private translate: TranslateService,private titleService: Title) { }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
        let w = 7/9 * parseInt($('.ag-theme-material').width());
        $('.details').width(w);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit() {
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(res => {
            this.cost_centers = res['cost_centers'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Cost Center', field: 'name'},
                {headerName: 'Type', field: 'type', cellRendererParams: {c: this}, cellRenderer: function(params) {
                        let c = params.c;
                        if (params.value == 0){
                            return c.translate.instant("costa.build")
                        }
                        else if (params.value == 1){
                            return c.translate.instant("costa.supp")
                        }
                        else if (params.value == 2){
                            return c.translate.instant("costa.dire")
                        }
                        else if (params.value == 3){
                            return c.translate.instant("costa.comm")
                        }
                    } },
                {headerName: 'Area', field: 'area' },
                {headerName: 'Work Hours / Day', field: 'workhours_qt', cellRenderer: function(params) {
                        if (params.data.type != 2) return '-'; else return params.value}},
                {headerName: 'Work Days / Month', field: 'workdays_qt', cellRenderer: function(params) {
                        if (params.data.type != 2) return '-'; else return params.value}},
                {headerName: 'Machines QT', field: 'machines_qt', cellRenderer: function(params) {
                        if (params.data.type != 2) return '-'; else return params.value}},
                {headerName: 'Sales Revenue', field: 'sales_revenue', cellRenderer: function(params) {
                        if (params.data.type != 3) return '-'; else return params.value}},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.cost_centers.length; i++){
                this.cost_centers[i]['details'] = {'type':this.cost_centers[i].type, 'row_id': i, 'id': this.cost_centers[i].id,'gridApi' : this.gridApi, 'gridColumnApi': this.gridColumnApi};
                this.cost_centers[i]['actions'] = {
                    'self' : this,
                    'id':this.cost_centers[i].id,
                    'delete': [this.delete, this.deleteCostCenter],
                    'edit': [this.edit, '/cost_centers/edit/'] };
            }
            this.rowData = this.cost_centers;
        });
        let c = this;
        $(document).ready(function() {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("costa.cost") );
        });
    }

    deleteCostCenter(id, type, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.costCenterSubs = self.costCenterApi.deleteCostCenter(id, parameter).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }

    massDeleteCostCenter() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.costCenterSubs = this.costCenterApi.deleteCostCenter('mass', parameter).subscribe(res => {
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
