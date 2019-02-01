import { Component, OnInit } from '@angular/core';
import {Tax} from "../../../Models/tax";
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {AccountService} from "../../../Services/account.service";
import {TaxService} from "../../../Services/tax.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';

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
    formChanged = false;
    constructor(private accountsApi: AccountService, private taxesApi : TaxService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        this.taxesSubs = this.taxesApi.getTax(this.route.params['value']['rule_id']).subscribe(res => {
            this.tax = res['tax'];
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
        this.taxesSubs = this.taxesApi.editTax(this.tax.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/taxes']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/taxes']);
        }
        else {
            this.router.navigate(['/taxes']);
        }
        return false;
    }
}
