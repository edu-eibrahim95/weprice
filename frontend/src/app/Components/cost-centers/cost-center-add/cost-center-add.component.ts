import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {BranchService} from "../../../Services/branch.service";
import {Branch} from "../../../Models/branch";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-cost-center-add',
    templateUrl: './cost-center-add.component.html',
    styleUrls: ['./cost-center-add.component.css']
})
export class CostCenterAddComponent implements OnInit {
    costCentersSubs: Subscription;
    branchesSubs: Subscription;
    branches : Branch[];
    formChanged= false;

    constructor(private branchesApi: BranchService,private costCentersApi: CostCentersService,private router: Router, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("costa.new") );
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.costCentersSubs = this.costCentersApi.addCostCenter(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/cost_centers']);
                    location.reload();
                }
            },
            console.error
        );
    }
    changeType() {
        let s = $("select[name=type]").val();
        if ( s == 2){
            $('.direct').removeClass('d-none');
        }
        else {
            $('.direct').addClass('d-none');
        }
        if (s == 3){
            $('.comm').removeClass('d-none');
        }
        else {
            $('.comm').addClass('d-none');
        }
    }
    onCancel(){
        if(this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/cost_centers']);}});
        }
        else {
            this.router.navigate(['/cost_centers']);
        }
        return false;
    }
}
