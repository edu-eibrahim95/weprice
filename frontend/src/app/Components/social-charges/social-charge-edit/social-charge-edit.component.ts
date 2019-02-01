import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {SocialChargeService} from "../../../Services/social-charge.service";
import {SocialCharge} from "../../../Models/social_charge";
import * as $ from 'jquery';

@Component({
    selector: 'app-social-charge-edit',
    templateUrl: './social-charge-edit.component.html',
    styleUrls: ['./social-charge-edit.component.css']
})
export class SocialChargeEditComponent implements OnInit {
    formChanged = false;
    socialChargesSubs: Subscription;
    accountsSubs: Subscription;
    accounts : Account[];
    social_charge : SocialCharge;
    constructor(private accountsApi: AccountService, private socialChargesApi : SocialChargeService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        this.socialChargesSubs = this.socialChargesApi.getSocialCharge(this.route.params['value']['rule_id']).subscribe(res => {
            this.social_charge = res['social_charge'];
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
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.socialChargesSubs = this.socialChargesApi.editSocialCharge(this.social_charge.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/social_charges']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/social_charges']);
        }
        else {
            this.router.navigate(['/social_charges']);
        }
        return false;
    }
}
