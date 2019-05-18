import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {CostMap} from "../../../Models/cost_map";
import {CostMapService} from "../../../Services/cost-map.service";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";
import swal from "sweetalert2";
import * as $ from 'jquery';

@Component({
  selector: 'app-cost-map-add',
  templateUrl: './cost-map-add.component.html',
  styleUrls: ['./cost-map-add.component.css']
})
export class CostMapAddComponent implements OnInit {

    costMapsSubs: Subscription;
    costMaps : CostMap[];
    errors = []
    formChanged= false;
    constructor(private costMapsApi : CostMapService, private router: Router, private translate: TranslateService,private titleService: Title) { }

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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("cost_maps.new") );
        });
    }

    onSubmit(f: NgForm) {
        f.value.year = f.value.final_date.split('-')[0];
        f.value.month = f.value.final_date.split('-')[1];
        let parameter = JSON.stringify(f.value);
        this.costMapsSubs = this.costMapsApi.addCostMap(parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/cost_maps']);
                    // location.reload();
                }
                else {
                    // @ts-ignore
                    this.errors = res;
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/cost_maps']);}});
        }
        else {
            this.router.navigate(['/cost_maps']);
        }
        return false;
    }

}
