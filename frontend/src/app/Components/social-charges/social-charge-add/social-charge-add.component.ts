import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {SocialChargeService} from "../../../Services/social-charge.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-social-charge-add',
    templateUrl: './social-charge-add.component.html',
    styleUrls: ['./social-charge-add.component.css']
})
export class SocialChargeAddComponent implements OnInit {


    accountsSubs: Subscription;
    accounts : Account[];
    socialChargesSubs: Subscription;

    constructor( private accountsApi: AccountService, private socialChargesApi : SocialChargeService, private router: Router) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.socialChargesSubs = this.socialChargesApi.addSocialCharge(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/social_charges']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
