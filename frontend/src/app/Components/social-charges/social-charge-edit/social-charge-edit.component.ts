import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {SocialChargeService} from "../../../Services/social-charge.service";
import {SocialCharge} from "../../../Models/social_charge";

@Component({
  selector: 'app-social-charge-edit',
  templateUrl: './social-charge-edit.component.html',
  styleUrls: ['./social-charge-edit.component.css']
})
export class SocialChargeEditComponent implements OnInit {

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

}
