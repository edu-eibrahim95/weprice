import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { CostCenter } from "../../../Models/cost_center";
import { Account } from "../../../Models/account";
import { EntryAccount } from "../../../Models/entry_account";
import { CostCentersService } from "../../../Services/cost-centers.service";
import { AccountService } from "../../../Services/account.service";
import { EntryAccountService } from "../../../Services/entry-account.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-entry-account-edit',
    templateUrl: './entry-account-edit.component.html',
    styleUrls: ['./entry-account-edit.component.css']
})
export class EntryAccountEditComponent implements OnInit {
    costCenterSubs: Subscription;
    accountsSubs: Subscription;
    cost_centers: CostCenter[];
    accounts: Account[];
    all_accounts: Account[];
    entry_account: EntryAccount;
    entryAccountsSubs: Subscription;
    formChanged = false;

    constructor(private costCenterApi: CostCentersService, private accountsApi: AccountService, private entryAccountsApi: EntryAccountService, private router: Router, private route: ActivatedRoute, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
            this.all_accounts = res['accounts'];
        });
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(res => {
            this.cost_centers = res['cost_centers'];
        });
        this.entryAccountsSubs = this.entryAccountsApi.getEntryAccount(this.route.params['value']['rule_id']).subscribe(res => {
            this.entry_account = res['entry_account'];
            let c = this;
            $(document).ready(function () {
                c.filterAccounts();
                c.changeCostCenter(null);
                let float_inputs = $(".float-input");
                float_inputs.each(function () { $(this).val(Math.abs(parseFloat($(this).val())).toFixed(2)); });
                float_inputs.on('change', function () {
                    $(this).val(Math.abs(parseFloat($(this).val())).toFixed(2));
                });
                $("input").on('change', function () {
                    c.formChanged = true;
                });
                $("select").on('change', function () {
                    c.formChanged = true;
                })
                c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("entry_accounts.edit") );
            });
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.entryAccountsSubs = this.entryAccountsApi.editEntryAccount(this.entry_account.id, parameter).subscribe(res => {
                if (res == 1) {
                    this.router.navigate(['/entry_accounts']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel() {
        if (this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/entry_accounts']);}});
        }
        else {
            this.router.navigate(['/entry_accounts']);
        }
        return false;
    }
    filterAccounts() {
        let type = $("select[name=type]").val();
        this.accounts = this.all_accounts.filter(row => row.nat == type);
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
