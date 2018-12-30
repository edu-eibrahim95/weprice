import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CostCenter} from "../../../Models/cost_center";

@Component({
    selector: 'app-cost-center-edit',
    templateUrl: './cost-center-edit.component.html',
    styleUrls: ['./cost-center-edit.component.css']
})
export class CostCenterEditComponent implements OnInit {
    costCentersSubs: Subscription;
    branchesSubs: Subscription;
    branches : Branch[];
    cost_center: CostCenter;
    constructor(private branchesApi: BranchService,private costCentersApi: CostCentersService,private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
        this.costCentersSubs = this.costCentersApi.getCostCenter(this.route.params['value']['rule_id']).subscribe(res => {
            this.cost_center = res['cost_center'];
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
}
