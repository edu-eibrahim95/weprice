import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../Services/account.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import * as $ from 'jquery';

@Component({
    selector: 'app-account-add',
    templateUrl: './account-add.component.html',
    styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {
    accountsSubs: Subscription;

    constructor(private accountsApi: AccountService, private router: Router) { }

    ngOnInit() {
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
        f.value.bdgentry_flag = (f.value.bdgentry_flag) ? 1 : 0 ;
        f.value.revenue_flag = (f.value.revenue_flag) ? 1 : 0 ;
        f.value.earning_distrib_flag = (f.value.earning_distrib_flag) ? 1 : 0 ;
        this.accountsSubs = this.accountsApi.addAccount(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/accounts']);
                    location.reload();
                }
            },
            console.error
        );
    }

}
