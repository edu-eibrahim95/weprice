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
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-asset-add',
    templateUrl: './asset-add.component.html',
    styleUrls: ['./asset-add.component.css']
})
export class AssetAddComponent implements OnInit {
    formChanged= false;
    assetsSubs: Subscription;
    assets : Asset[];
    assetTypesSubs: Subscription;
    assetTypes : AssetType[];
    localsSubs: Subscription;
    locals : Local[];
    branchesSubs: Subscription;
    branches : Branch[];
    constructor(private branchesApi: BranchService, private assetApi : AssetService, private router: Router, private assetTypesApi : AssetTypeService, private localsApi : LocalService, private translate: TranslateService,private titleService: Title) { }

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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("assets_add.new") );
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
    onCancel(){
        if(this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/assets']);}});
        }
        else {
            this.router.navigate(['/assets']);
        }
        return false;
    }
}
