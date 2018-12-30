import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Branch} from "../../../Models/branch";
import {Asset} from "../../../Models/asset";
import {BranchService} from "../../../Services/branch.service";
import {AssetService} from "../../../Services/asset.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-asset-edit',
    templateUrl: './asset-edit.component.html',
    styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {

    branchesSubs: Subscription;
    branches : Branch[];
    assetSubs: Subscription;
    asset : Asset;
    constructor(private branchesApi: BranchService, private assetsApi: AssetService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
        this.assetSubs = this.assetsApi.getAsset(this.route.params['value']['rule_id']).subscribe(res => {
            this.asset = res['asset'];
        });
    }

    onSubmit(f: NgForm) {
        f.value.depreciable_flag = (f.value.depreciable_flag) ? 1 : 0 ;
        let asset = JSON.stringify(f.value);
        this.assetSubs = this.assetsApi.editAsset(this.asset.id, asset).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/assets']);
                    location.reload();
                }
            },
            console.error
        );
    }

}
