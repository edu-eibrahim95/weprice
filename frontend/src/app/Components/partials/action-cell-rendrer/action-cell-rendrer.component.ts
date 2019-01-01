import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'action-cell-renderer',
    templateUrl: './action-cell-rendrer.component.html'
})
export class ActionsFormatterComponent implements  OnInit{
    can_delete : boolean;
    can_edit : boolean;
    can_save : boolean;
    edit_url : string;
    entity_id : number;
    api : any;
    type : null;
    self: null;
    delete(id, api) {} ;
    save(id, api) {} ;
    constructor(){}
    ngOnInit() {
    }
    agInit(params: any): void {
        this.entity_id = params.value.id;
        this.api = params.value.api;
        this.can_delete = params.value.delete[0];
        this.delete = params.value.delete[1];
        this.can_edit = params.value.edit[0];
        this.edit_url = params.value.edit[1];
        this.can_save = (typeof params.value.save !== 'undefined') ? params.value.save[0] : false;
        this.save = (typeof params.value.save !== 'undefined') ? params.value.save[1] : false;
        if (this.can_save || this.can_delete){
            this.type = params.value.type;
            this.self = params.value.self;
        }
    }
}
