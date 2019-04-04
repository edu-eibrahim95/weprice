import { Component, OnInit } from '@angular/core';
import {CostCenter} from "../../../Models/cost_center";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {DetailsFormatterComponent} from "../../partials/cost-center-details/cost-center-details.component";
import * as $ from 'jquery';

@Component({
  selector: 'app-cost-map-view',
  templateUrl: './cost-map-view.component.html',
  styleUrls: ['./cost-map-view.component.css']
})
export class CostMapViewComponent implements OnInit {
  add = false;
  edit = false;
  delete = false;
  columnDefs = [];
  rowData = [];
  cost_centers : CostCenter[];
  private gridApi;
  private gridColumnApi;

  frameworkComponents = {
    // actionsFormatterComponent: ActionsFormatterComponent,
  };
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    let w = 7/9 * parseInt($('.ag-theme-material').width());
    $('.details').width(w);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  constructor() { }

  ngOnInit() {
  }

}
