import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Local} from "../../../Models/local";
import {LocalService} from "../../../Services/local.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-local-add',
    templateUrl: './local-add.component.html',
    styleUrls: ['./local-add.component.css']
})
export class LocalAddComponent implements OnInit {

    localsSubs: Subscription;
    locals : Local[];
    formChanged= false;
    constructor(private localsApi : LocalService, private router: Router, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("locala.new") );
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.localsSubs = this.localsApi.addLocal(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/locals']);
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
                .then(function(result){if (! result.dismiss){c.router.navigate(['/locals']);}});
        }
        else {
            this.router.navigate(['/locals']);
        }
        return false;
    }
}
