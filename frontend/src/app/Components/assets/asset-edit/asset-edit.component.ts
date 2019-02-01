import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Branch} from "../../../Models/branch";
import {Asset} from "../../../Models/asset";
import {BranchService} from "../../../Services/branch.service";
import {AssetService} from "../../../Services/asset.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AssetType} from "../../../Models/asset_type";
import {Local} from "../../../Models/local";
import {AssetTypeService} from "../../../Services/asset-type.service";
import {LocalService} from "../../../Services/local.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-asset-edit',
    templateUrl: './asset-edit.component.html',
    styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {
    formChanged = false;
    branchesSubs: Subscription;
    branches : Branch[];
    assetSubs: Subscription;
    asset : Asset;
    assetTypesSubs: Subscription;
    assetTypes : AssetType[];
    localsSubs: Subscription;
    locals : Local[];
    constructor(private branchesApi: BranchService, private assetsApi: AssetService, private router: Router, private route: ActivatedRoute, private assetTypesApi : AssetTypeService, private localsApi : LocalService) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
        this.assetSubs = this.assetsApi.getAsset(this.route.params['value']['rule_id']).subscribe(res => {
            this.asset = res['asset'];
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
        this.assetSubs = this.assetsApi.editAsset(this.asset.id, asset).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/assets']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/assets']);
        }
        else {
            this.router.navigate(['/assets']);
        }
        return false;
    }

}
