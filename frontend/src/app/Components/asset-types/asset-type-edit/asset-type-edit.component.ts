import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AssetType} from "../../../Models/asset_type";
import {AccountService} from "../../../Services/account.service";
import {AssetTypeService} from "../../../Services/asset-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-asset-type-edit',
  templateUrl: './asset-type-edit.component.html',
  styleUrls: ['./asset-type-edit.component.css']
})
export class AssetTypeEditComponent implements OnInit {

  assetTypesSubs: Subscription;
    accountsSubs: Subscription;
    accounts : Account[];
    asset_type : AssetType;
    constructor(private accountsApi: AccountService, private assetTypesApi : AssetTypeService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        this.assetTypesSubs = this.assetTypesApi.getAssetType(this.route.params['value']['rule_id']).subscribe(res => {
            this.asset_type = res['asset_type'];
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.assetTypesSubs = this.assetTypesApi.editAssetType(this.asset_type.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/asset_types']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
