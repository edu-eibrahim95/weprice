import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Spot} from "../../../Models/spot";
import {SpotService} from "../../../Services/spot.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-spot-add',
    templateUrl: './spot-add.component.html',
    styleUrls: ['./spot-add.component.css']
})
export class SpotAddComponent implements OnInit {

    spotsSubs: Subscription;
    spots : Spot[];
    formChanged= false;
    constructor(private spotsApi : SpotService, private router: Router, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        let c = this;
        $(document).ready(function (){
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("spota.new") );
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.spotsSubs = this.spotsApi.addSpot(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/spots']);
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
                .then(function(result){if (! result.dismiss){c.router.navigate(['/spots']);}});
        }
        else {
            this.router.navigate(['/spots']);
        }
        return false;
    }
}
