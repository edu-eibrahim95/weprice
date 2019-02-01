import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Local} from "../../../Models/local";
import {LocalService} from "../../../Services/local.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';

@Component({
    selector: 'app-local-edit',
    templateUrl: './local-edit.component.html',
    styleUrls: ['./local-edit.component.css']
})
export class LocalEditComponent implements OnInit {

    localsSubs: Subscription;
    local : Local;
    formChanged = false;
    constructor(private localsApi: LocalService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.localsSubs = this.localsApi.getLocal(this.route.params['value']['rule_id']).subscribe(res => {
            this.local = res['local'];
            let c = this;
            $(document).ready(function () {
                let float_inputs = $(".float-input");
                float_inputs.each(function () { $(this).val(parseFloat($(this).val()).toFixed(2)); });
                float_inputs.on('change',function() {
                    $(this).val(parseFloat($(this).val()).toFixed(2));
                });
                $("input").on('change', function() {
                    c.formChanged = true;
                });
                $("select").on('change', function() {
                    c.formChanged = true;
                });
            });
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.localsSubs = this.localsApi.editLocal(this.local.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/locals']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/locals']);
        }
        else {
            this.router.navigate(['/locals']);
        }
        return false;
    }
}
