import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Spot} from "../../../Models/spot";
import {SpotService} from "../../../Services/spot.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-spot-edit',
    templateUrl: './spot-edit.component.html',
    styleUrls: ['./spot-edit.component.css']
})
export class SpotEditComponent implements OnInit {
    formChanged = false;
    spotsSubs: Subscription;
    spot : Spot;
    constructor(private spotsApi: SpotService, private router: Router, private route: ActivatedRoute, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.spotsSubs = this.spotsApi.getSpot(this.route.params['value']['rule_id']).subscribe(res => {
            this.spot = res['spot'];
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
                c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("spote.edit") );
            });
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.spotsSubs = this.spotsApi.editSpot(this.spot.id, parameter).subscribe(res => {
                if (res == 1 ){
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
