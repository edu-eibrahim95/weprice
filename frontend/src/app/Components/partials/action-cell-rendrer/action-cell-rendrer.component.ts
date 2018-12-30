import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'action-cell-rendrer',
    templateUrl: './action-cell-rendrer.component.html'
})
export class ActionsFormatterComponent implements  OnInit{
    params: any;
    can_delete : boolean;
    can_edit : boolean;
    edit_url : string;
    entity_id : number;
    gridApi : any;
    delete(id, api) {} ;
    constructor(){}
    ngOnInit() {
    }
    agInit(params: any): void {
        this.params = params;
        this.entity_id = this.params.value.id;
        this.gridApi = this.params.value.api;
        this.can_delete = this.params.value.delete[0];
        this.delete = this.params.value.delete[1];
        this.can_edit = params.value.edit[0];
        this.edit_url = params.value.edit[1];
    }
}
