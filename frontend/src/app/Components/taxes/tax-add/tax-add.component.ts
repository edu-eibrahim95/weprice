import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../Services/account.service";
import {TaxService} from "../../../Services/tax.service";
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import * as $ from 'jquery';

@Component({
    selector: 'app-tax-add',
    templateUrl: './tax-add.component.html',
    styleUrls: ['./tax-add.component.css']
})
export class TaxAddComponent implements OnInit {
    accountsSubs: Subscription;
    accounts : Account[];
    taxesSubs: Subscription;

    constructor( private accountsApi: AccountService, private taxesApi : TaxService, private router: Router) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
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
        this.taxesSubs = this.taxesApi.addTax(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/taxes']);
                    location.reload();
                }
            },
            console.error
        );
    }
}
