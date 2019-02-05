import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {AssetTypeService} from "../../../Services/asset-type.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-asset-type-add',
    templateUrl: './asset-type-add.component.html',
    styleUrls: ['./asset-type-add.component.css']
})
export class AssetTypeAddComponent implements OnInit {
    formChanged= false;
    accountsSubs: Subscription;
    accounts : Account[];
    assetTypesSubs: Subscription;

    constructor( private accountsApi: AccountService, private assetTypesApi : AssetTypeService, private router: Router,  private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("asset_add.new_type") );
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.assetTypesSubs = this.assetTypesApi.addAssetType(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/asset_types']);
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
                .then(function(result){if (! result.dismiss){c.router.navigate(['/asset_types']);}});
        }
        else {
            this.router.navigate(['/asset_types']);
        }
        return false;
    }
}
