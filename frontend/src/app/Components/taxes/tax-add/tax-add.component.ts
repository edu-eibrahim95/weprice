import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../Services/account.service";
import {TaxService} from "../../../Services/tax.service";
import {Subscription} from "rxjs";
import {Account} from "../../../Models/account";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-tax-add',
    templateUrl: './tax-add.component.html',
    styleUrls: ['./tax-add.component.css']
})
export class TaxAddComponent implements OnInit {
    accountsSubs: Subscription;
    accounts : Account[];
    taxesSubs: Subscription;
    formChanged= false;
    constructor( private accountsApi: AccountService, private taxesApi : TaxService, private router: Router, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(res => {
            this.accounts = res['accounts'];
        });
        let  c = this;
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("taxa.new") );
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
    onCancel(){
        if(this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/taxes']);}});
        }
        else {
            this.router.navigate(['/taxes']);
        }
        return false;
    }
}
