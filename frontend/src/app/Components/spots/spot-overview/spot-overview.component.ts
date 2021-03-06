import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Spot} from "../../../Models/spot";
import {ActionsFormatterComponent} from "../../partials/action-cell-rendrer/action-cell-renderer.component";
import {SpotService} from "../../../Services/spot.service";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-spot-overview',
    templateUrl: './spot-overview.component.html',
    styleUrls: ['./spot-overview.component.css']
})
export class SpotOverviewComponent implements OnInit {

    spotsSubs: Subscription;
    spots : Spot[];
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
    constructor(private spotsApi : SpotService, private translate: TranslateService,private titleService: Title) { }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit() {
        this.spotsSubs = this.spotsApi.getSpots().subscribe(res => {
            this.spots = res['spots'];
            this.add = res['add'];
            this.edit = res['edit'];
            this.delete = res['delete'];
            this.columnDefs = [
                {headerName: 'Name', field: 'name' },
                {headerName: 'Ip Address', field: 'ip_address' },
                {headerName: 'NIC Address', field: 'nic_address' },
                {headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent'},
            ];
            for (let i=0; i<this.spots.length; i++){
                this.spots[i]['actions'] = {
                    'api' : this.spotsApi,
                    'id':this.spots[i].id,
                    'delete': [this.delete, this.deleteSpot],
                    'edit': [this.edit, '/spots/edit/'] ,
                    'self':this
                };
            }
            this.rowData = this.spots;
        });
        let c = this;
        $(document).ready(function () {
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("spoto.spot") );
        });
    }

    massDeleteSpots() {
        let nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            let ids = nodes.map(row => row.data.id);
            let parameter = {ids : ids};
            if(confirm("Are You Sure Want To Delete ? ")){
                this.spotsSubs = this.spotsApi.deleteSpot('mass', parameter).subscribe(res => {
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

    deleteSpot(id, spotsApi, self) {
        let parameter = {};
        if(confirm("Are You Sure Want To Delete ? ")){
            this.spotsSubs = self.spotsApi.deleteSpot(id, parameter).subscribe(res => {
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
