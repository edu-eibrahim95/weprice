import { Component, OnInit } from '@angular/core';
import {Tax} from "../../../Models/tax";
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {TaxService} from "../../../Services/tax.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-tax-edit',
    templateUrl: './tax-edit.component.html',
    styleUrls: ['./tax-edit.component.css']
})
export class TaxEditComponent implements OnInit {
    taxesSubs: Subscription;
    accountsSubs: Subscription;
    accounts : Account[];
    tax : Tax;
    constructor(private accountsApi: AccountService, private taxesApi : TaxService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        this.taxesSubs = this.taxesApi.getTax(this.route.params['value']['rule_id']).subscribe(res => {
            this.tax = res['tax'];
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.taxesSubs = this.taxesApi.editTax(this.tax.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/taxes']);
                    location.reload();
                }
            },
            console.error
        );
    }

}
