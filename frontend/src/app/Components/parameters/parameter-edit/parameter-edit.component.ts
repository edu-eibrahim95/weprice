import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ParameterService} from "../../../Services/parameter.service";
import {Parameter} from "../../../Models/parameter";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-parameter-edit',
    templateUrl: './parameter-edit.component.html',
    styleUrls: ['./parameter-edit.component.css']
})
export class ParameterEditComponent implements OnInit {
    formChanged = false;
    parameterSubs: Subscription;
    parameter : Parameter;
    constructor(private parametersApi: ParameterService, private router: Router, private route: ActivatedRoute, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.parameterSubs = this.parametersApi.getParameter(this.route.params['value']['rule_id']).subscribe(res => {
            this.parameter = res['parameter'];
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
                c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("parame.edit") );
            });
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.parameterSubs = this.parametersApi.editParameter(this.parameter.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/parameters']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/parameters']);}});
        }
        else {
            this.router.navigate(['/parameters']);
        }
        return false;
    }
}
