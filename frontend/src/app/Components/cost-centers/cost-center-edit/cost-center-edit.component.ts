import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CostCenter} from "../../../Models/cost_center";
import * as $ from 'jquery';

@Component({
    selector: 'app-cost-center-edit',
    templateUrl: './cost-center-edit.component.html',
    styleUrls: ['./cost-center-edit.component.css']
})
export class CostCenterEditComponent implements OnInit{
    costCentersSubs: Subscription;
    branchesSubs: Subscription;
    branches : Branch[];
    cost_center: CostCenter;
    formChanged = false;
    constructor(private branchesApi: BranchService,private costCentersApi: CostCentersService,private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
        this.costCentersSubs = this.costCentersApi.getCostCenter(this.route.params['value']['rule_id']).subscribe(res => {
            this.cost_center = res['cost_center'];
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
        this.costCentersSubs = this.costCentersApi.editCostCenter(this.cost_center.id, parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/cost_centers']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/cost_centers']);
        }
        else {
            this.router.navigate(['/cost_centers']);
        }
        return false;
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
}
