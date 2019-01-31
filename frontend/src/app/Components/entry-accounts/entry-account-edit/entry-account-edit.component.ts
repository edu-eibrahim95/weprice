import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {CostCenter} from "../../../Models/cost_center";
import {Account} from "../../../Models/account";
import {EntryAccount} from "../../../Models/entry_account";
import {CostCentersService} from "../../../Services/cost-centers.service";
import {AccountService} from "../../../Services/account.service";
import {EntryAccountService} from "../../../Services/entry-account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';

@Component({
  selector: 'app-entry-account-edit',
  templateUrl: './entry-account-edit.component.html',
  styleUrls: ['./entry-account-edit.component.css']
})
export class EntryAccountEditComponent implements OnInit {

    costCenterSubs: Subscription;
    accountsSubs: Subscription;
    cost_centers : CostCenter[];
    accounts : Account[];
    entry_account : EntryAccount;
    entryAccountsSubs: Subscription;

    constructor( private costCenterApi: CostCentersService, private accountsApi: AccountService, private entryAccountsApi : EntryAccountService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(res => {
            this.cost_centers = res['cost_centers'];
        });
        this.entryAccountsSubs = this.entryAccountsApi.getEntryAccount(this.route.params['value']['rule_id']).subscribe(res => {
            this.entry_account = res['entry_account'];
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
        this.entryAccountsSubs = this.entryAccountsApi.editEntryAccount(this.entry_account.id, parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/entry_accounts']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
