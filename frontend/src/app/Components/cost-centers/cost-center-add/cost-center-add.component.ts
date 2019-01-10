import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {BranchService} from "../../../Services/branch.service";
import {Branch} from "../../../Models/branch";
import * as $ from 'jquery';

@Component({
    selector: 'app-cost-center-add',
    templateUrl: './cost-center-add.component.html',
    styleUrls: ['./cost-center-add.component.css']
})
export class CostCenterAddComponent implements OnInit {
    costCentersSubs: Subscription;
    branchesSubs: Subscription;
    branches : Branch[];

    constructor(private branchesApi: BranchService,private costCentersApi: CostCentersService,private router: Router) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
            console.log(this.branches);
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
    }

}
