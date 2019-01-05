import { Component, OnInit } from '@angular/core';
import {CostCenter} from "../../../Models/cost_center";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {Subscription} from "rxjs";
import * as $ from 'jquery';
import {DetailsFormatterComponent} from "../../partials/cost-center-details/cost-center-details.component";

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
    constructor(private costCenterApi: CostCentersService) { }

    ngOnInit() {
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(res => {
            this.cost_centers = res['cost_centers'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 330;
            w = w/8;
            this.columnDefs = [
                {headerName: '', field: 'check', checkboxSelection:true, width:60},
                {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                {headerName: 'Cost Center', field: 'name', width: w},
                {headerName: 'Area', field: 'area', width: w },
                {headerName: 'Work Hours / Day', field: 'workhours_qt', width: w},
                {headerName: 'Work Days / Month', field: 'workdays_qt', width: w},
                {headerName: 'Machines QT', field: 'machines_qt', width: w},
                {headerName: 'Sales Revenue', field: 'sales_revenue', width: w},
                {headerName: 'Type', field: 'type', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.cost_centers.length; i++){
                this.cost_centers[i]['details'] = {'row_id': i, 'id': this.cost_centers[i].id,'gridApi' : this.gridApi, 'gridColumnApi': this.gridColumnApi};
                this.cost_centers[i]['actions'] = {
                    'self' : this,
                    'id':this.cost_centers[i].id,
                    'delete': [this.delete, this.deleteCostCenter],
                    'edit': [this.edit, '/cost_centers/edit/'] };
            }
            this.rowData = this.cost_centers;
        });

    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
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
