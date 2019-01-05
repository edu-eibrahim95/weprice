import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {AssetTypeService} from "../../../Services/asset-type.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-asset-type-add',
  templateUrl: './asset-type-add.component.html',
  styleUrls: ['./asset-type-add.component.css']
})
export class AssetTypeAddComponent implements OnInit {

     accountsSubs: Subscription;
    accounts : Account[];
    assetTypesSubs: Subscription;

  constructor( private accountsApi: AccountService, private assetTypesApi : AssetTypeService, private router: Router) { }

  ngOnInit() {
    this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
      this.accounts = res['accounts'];
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

}
