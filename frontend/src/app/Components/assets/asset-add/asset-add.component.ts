import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Asset} from "../../../Models/asset";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";
import {AssetService} from "../../../Services/asset.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AssetType} from "../../../Models/asset_type";
import {Local} from "../../../Models/local";
import {AssetTypeService} from "../../../Services/asset-type.service";
import {LocalService} from "../../../Services/local.service";

@Component({
    selector: 'app-asset-add',
    templateUrl: './asset-add.component.html',
    styleUrls: ['./asset-add.component.css']
})
export class AssetAddComponent implements OnInit {

    assetsSubs: Subscription;
    assets : Asset[];
    assetTypesSubs: Subscription;
    assetTypes : AssetType[];
    localsSubs: Subscription;
    locals : Local[];
    branchesSubs: Subscription;
    branches : Branch[];
    constructor(private branchesApi: BranchService, private assetApi : AssetService, private router: Router, private assetTypesApi : AssetTypeService, private localsApi : LocalService) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
        this.assetTypesSubs = this.assetTypesApi.getAssetTypes().subscribe(res => {
            this.assetTypes = res['asset_types'];
        });
        this.localsSubs = this.localsApi.getLocals().subscribe(res => {
            this.locals = res['locals'];
        });
    }

    onSubmit(f: NgForm) {
        f.value.depreciable_flag = (f.value.depreciable_flag) ? 1 : 0 ;
        let asset = JSON.stringify(f.value);
        this.assetsSubs = this.assetApi.addAsset(asset).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/assets']);
                    location.reload();
                }
            },
            console.error
        );
    }

}
