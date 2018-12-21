import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Rx";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";
import * as $ from 'jquery';

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
  constructor(private branchesApi: BranchService) { }

  ngOnInit() {
    this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
      this.branches = res['branches'];
      console.log(this.branches);
      this.height = this.branches.length * 48 + 60
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
        {headerName: 'Actions', field: 'actions', width: w, cellRenderer: function (params) {
            return params.value ? params.value : '';
          }},
      ];
      for (let i=0; i<this.branches.length; i++){
        this.branches[i]['actions'] = $("<div><a class='btn btn-danger'><i class='fa fa-trash text-white'></i></a>  <a class='btn btn-primary'><i class='fa fa-edit text-white'></i></a></div>").html();
      }
      this.rowData = this.branches;
      $('ag-grid-angular').height(this.height);
    });
  }

}
