import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Account } from "../../../Models/account";
import { AccountService } from "../../../Services/account.service";
import { EntryAccountService } from "../../../Services/entry-account.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as $ from 'jquery';
import { CostCentersService } from "../../../Services/cost-centers.service";
import { CostCenter } from "../../../Models/cost_center";

@Component({
    selector: 'app-entry-account-add',
    templateUrl: './entry-account-add.component.html',
    styleUrls: ['./entry-account-add.component.css']
})
export class EntryAccountAddComponent implements OnInit {

    costCenterSubs: Subscription;
    accountsSubs: Subscription;
    cost_centers: CostCenter[];
    accounts: Account[];
    all_accounts: Account[];
    entryAccountsSubs: Subscription;

    constructor(private costCenterApi: CostCentersService, private accountsApi: AccountService, private entryAccountsApi: EntryAccountService, private router: Router) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
            this.all_accounts = res['accounts'];
            this.filterAccounts();
        });
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(res => {
            this.cost_centers = res['cost_centers'];
            this.changeCostCenter(null);
        });
        $(document).ready(function () {
            let float_inputs = $(".float-input");
            float_inputs.each(function () { $(this).val(Math.abs(parseFloat($(this).val())).toFixed(2)); });
            float_inputs.on('change', function () {
                $(this).val(Math.abs(parseFloat($(this).val())).toFixed(2));
            });
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.entryAccountsSubs = this.entryAccountsApi.addEntryAccount(parameter).subscribe(res => {
            if (res == 1) {
                this.router.navigate(['/entry_accounts']);
                location.reload();
            }
        },
            console.error
        );
    }
    filterAccounts() {
        let type = $("select[name=type]").val();
        this.accounts = this.all_accounts.filter(row => row.type == type);
    }
    changeCostCenter(f:NgForm) {
        let account_id = $("select[name=account_id]").val();
        let account = this.all_accounts.find(row => row.id == account_id);
        if (account) {
            let expense_abs_type = account.expense_abs_type;
            if (expense_abs_type == 8) {
                $(".only-expense-abs-type").show();
                $("select[name=cost_center_id]").val(0);
                if(f){
                    let values = f.value;
                    values.cost_center_id = 0;
                    console.log(values);
                    f.setValue(values);
                    }
            }
            else {
                $(".only-expense-abs-type").hide();
            }
        }
    }
}
