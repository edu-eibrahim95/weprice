import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'action-cell-renderer',
    templateUrl: './action-cell-renderer.component.html'
})
export class ActionsFormatterComponent implements  OnInit{
    can_delete : boolean;
    can_edit : boolean;
    can_save : boolean;
    can_view : boolean;
    can_in_use : boolean;
    can_recalc : boolean;

    edit_url : string;
    view_url : string;
    entity_id : number;
    type : string;

    self: object;
    delete(id, type, self) {} ;
    save(id, type, self) {} ;
    in_use(id, type, self) {} ;
    recalc(id, type, self) {} ;

    constructor(){}

    ngOnInit() {
    }
    agInit(params: any): void {
        this.can_delete = (typeof params.value.delete !== 'undefined') ? params.value.delete[0] : false;
        this.can_edit =  (typeof params.value.edit !== 'undefined') ? params.value.edit[0] : false;
        this.can_save = (typeof params.value.save !== 'undefined') ? params.value.save[0] : false;
        this.can_view = (typeof params.value.view !== 'undefined') ? params.value.view[0] : false;
        this.can_in_use = (typeof params.value.in_use !== 'undefined') ? params.value.in_use[0] : false;
        this.can_recalc = (typeof params.value.recalc !== 'undefined') ? params.value.recalc[0] : false;

        this.edit_url = (typeof params.value.edit !== 'undefined') ? params.value.edit[1] : '';
        this.view_url = (typeof params.value.view !== 'undefined') ? params.value.view[1] : '';
        this.entity_id = (typeof params.value.id !== 'undefined') ? params.value.id : 0;
        this.type = (typeof params.value.type !== 'undefined') ? params.value.type : '';
        this.self =(typeof params.value.self !== 'undefined') ?  params.value.self: null;

        this.delete = (typeof params.value.delete !== 'undefined') ? params.value.delete[1] : this.delete;
        this.save = (typeof params.value.save !== 'undefined') ? params.value.save[1] : this.save;
        this.in_use = (typeof params.value.in_use !== 'undefined') ? params.value.in_use[1] : this.in_use;
        this.recalc = (typeof params.value.in_use !== 'undefined') ? params.value.recalc[1] : this.recalc;
    }
}
