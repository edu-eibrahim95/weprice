import { Component, OnInit  } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../Services/account.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import * as $ from 'jquery';
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import swal from 'sweetalert2';

@Component({
    selector: 'app-account-add',
    templateUrl: './account-add.component.html',
    styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {
    accountsSubs: Subscription;
    formChanged = false;

    constructor(private accountsApi: AccountService, private router: Router, private titleService: Title, private translate: TranslateService) { }

    ngOnInit() {
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("acc_add.new") );
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
    onCancel(){
        if(this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true}).then(function(result){if (! result.dismiss){c.router.navigate(['/accounts']);}});
        }
        else {
            this.router.navigate(['/accounts']);
        }
        return false;
    }
}
