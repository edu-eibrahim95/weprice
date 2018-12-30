import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'cost-center-details',
    templateUrl: './cost-center-details.component.html'
})
export class DetailsFormatterComponent implements  OnInit{
    params: any;
    columnDefs = [];
    rowData = [];
    w : number;
    master_raw_id = null;
    private gridApi;
    private gridColumnApi;
    constructor(){}
    ngOnInit() {
        this.columnDefs = [
            {headerName: '', field: 'check', checkboxSelection:true},
            {headerName: 'Cost Center Name', field: 'make' },
            {headerName: 'Rating %', field: 'model' },
        ];

        this.rowData = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
        ];

        $(document).ready(function () {
            $(".mat-ink-bar.mat-ink-bar").css("visibility", "hidden");
            let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
            $('mat-tab-group').width(w)
        })
    }
    agInit(params: any): void {
        this.params = params;
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.id;
    }
    toggleDetails() {
        let toggle = $('.details-toggle-'+this.master_raw_id);
        let angle = toggle.find('i');
        let node = this.gridApi.getRowNode(this.master_raw_id);
        let t = $('#tab-details-'+this.master_raw_id);
        let bar = t.find('.mat-ink-bar');
        console.log(bar);
        if(toggle.hasClass('collapsed-toggle')){
            let d = $('#details-'+this.master_raw_id);
            t.removeClass('invisible');
            let h = t.height();
            node.setRowHeight(h+170);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('collapsed-toggle');
            toggle.addClass('expanded-toggle');
            angle.removeClass('fa-angle-down');
            angle.addClass('fa-angle-up');
            bar.css('visibility', 'visible');
        }
        else if (toggle.hasClass('expanded-toggle')){
            node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
            bar.css('visibility', 'hidden');
        }
    }
}
