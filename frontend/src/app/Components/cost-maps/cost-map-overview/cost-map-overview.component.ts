import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {CostMap} from "../../../Models/cost_map";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {CostMapService} from "../../../Services/cost-map.service";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import * as $ from 'jquery';

@Component({
    selector: 'app-cost-map-overview',
    templateUrl: './cost-map-overview.component.html',
    styleUrls: ['./cost-map-overview.component.css']
})
export class CostMapOverviewComponent implements OnInit {

    costMapsSubs: Subscription;
    costMaps : CostMap[];
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
    constructor(private costMapsApi : CostMapService, private translate: TranslateService,private titleService: Title) { }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit() {
        this.costMapsSubs = this.costMapsApi.getCostMaps().subscribe(res => {
            this.costMaps = res['cost_maps'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: 'Year', field: 'year' },
                {headerName: 'Month', field: 'month' },
                {headerName: 'Calculated at', field: 'calculated_at' },
                {headerName: 'In Use', field: 'in_use',cellRendererParams: {c: this},  cellRenderer: function (params) {
                    let c = params.c;
                        if(params.value == 0)
                            return "<i class='fa fa-times fa-2x'></i>";
                        else
                            return "<i class='fa fa-check fa-2x'></i>";
                    }},
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.costMaps.length; i++){
                this.costMaps[i]['actions'] = {
                    'api' : this.costMapsApi,
                    'id':this.costMaps[i].id,
                    'delete': [this.delete, this.deleteCostMap],
                    'view': [true, '/cost_maps/view/'],
                    'in_use': [true, this.inUseCostMap],
                    'recalc': [true, this.recalcCostMap],
                    'edit': [false, '/cost_maps/edit/'] ,
                    'self':this
                };
            }
            this.rowData = this.costMaps;
        });
        let c = this;
        $(document).ready(function () {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("costMapo.costMap") );
        });
    }

    massDeleteCostMaps() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.costMapsSubs = this.costMapsApi.deleteCostMap('mass', parameter).subscribe(res => {
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
    recalcCostMap(id, costMapsApi, self){
        let parameter = {};

        if(confirm("Are You Sure Want To ReCalculate ? ")){
            this.costMapsSubs = self.costMapsApi.recalcCostMap(id, parameter).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }
       inUseCostMap(id, costMapsApi, self){
        let parameter = {};

        if(confirm("Are You Sure Want To change in use cost map ? ")){
            this.costMapsSubs = self.costMapsApi.inUseCostMap(id, parameter).subscribe(res => {
                    if (res == 1 ){
                        location.reload();
                    }
                },
                console.error
            );
        }
        return false;
    }
    deleteCostMap(id, costMapsApi, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.costMapsSubs = self.costMapsApi.deleteCostMap(id, parameter).subscribe(res => {
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
