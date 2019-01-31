import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {EntryAccountService} from "../../../Services/entry-account.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';
import {CostCentersService} from "../../../Services/cost-centers.service";
import {CostCenter} from "../../../Models/cost_center";

@Component({
    selector: 'app-entry-account-add',
    templateUrl: './entry-account-add.component.html',
    styleUrls: ['./entry-account-add.component.css']
})
export class EntryAccountAddComponent implements OnInit {

    costCenterSubs: Subscription;
    accountsSubs: Subscription;
    cost_centers : CostCenter[];
    accounts : Account[];
    entryAccountsSubs: Subscription;

    constructor( private costCenterApi: CostCentersService, private accountsApi: AccountService, private entryAccountsApi : EntryAccountService, private router: Router) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(res => {
            this.cost_centers = res['cost_centers'];
        });
        $(document).ready(function () {
            let float_inputs = $(".float-input");
            float_inputs.each(function () { $(this).val(parseFloat($(this).val()).toFixed(2)); });
            float_inputs.on('change',function() {
                $(this).val(parseFloat($(this).val()).toFixed(2));
            });
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.entryAccountsSubs = this.entryAccountsApi.addEntryAccount(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/entry_accounts']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
