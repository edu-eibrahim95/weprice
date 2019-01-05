import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Rx";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";
import * as $ from 'jquery';
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";

@Component({
    selector: 'app-branches-overview',
    templateUrl: './branches-overview.component.html',
    styleUrls: ['./branches-overview.component.css']
})
export class BranchesOverviewComponent implements OnInit {
    branchesSubs: Subscription;
    branches : Branch[];
    columnDefs = [];
    rowData = [];
    height = null;
    add = false;
    edit = false;
    delete = false;
    frameworkComponents = {
        actionsFormatterComponent: ActionsFormatterComponent,
    };
    private gridApi;
    private gridColumnApi;
    constructor(private branchesApi: BranchService) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.height = this.branches.length * 48 + 60;
            let w = $(document).innerWidth() - $('.br-sideleft').width() - 220;
            w = w/10;
            this.columnDefs = [
                {headerName: 'Branch', field: 'name', width: w},
                {headerName: 'Area', field: 'area', width: w },
                {headerName: 'Monthly AVG QT', field: 'months_avg_qt', width: w},
                {headerName: 'Monthly Interest', field: 'interest_month_pct', width: w},
                {headerName: 'Work Hours / Day', field: 'workhours_day_qt', width: w},
                {headerName: 'Work Days / Month', field: 'workdays_month_qt', width: w},
                {headerName: 'Monthly Stock QT', field: 'months_stock_qt', width: w},
                {headerName: 'Raw Material Rate', field: 'raw_material_rate_pct', width: w},
                {headerName: 'Days Rec', field: 'days_rec_qt', width: w},
                {headerName: 'Actions', field: 'actions', width: w, cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.branches.length; i++){
                this.branches[i]['actions'] = {
                    'self' : this,
                    'id':this.branches[i].id,
                    'delete': [this.delete, this.deleteBranch],
                    'edit': [this.edit, '/branches/edit/']
                };
            }
            this.rowData = this.branches;
        });
    }
    deleteBranch(id, type, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.branchesSubs = self.branchesApi.deleteBranch(id, parameter).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    massDeleteBranch() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.branchesSubs = this.branchesApi.deleteBranch('mass', parameter).subscribe(res => {
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
