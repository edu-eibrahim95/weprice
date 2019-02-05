import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../../Models/user";
import {UserService} from "../../../Services/user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    usersSubs: Subscription;
    users : User[];
    formChanged= false;
    constructor(private userApi : UserService, private router: Router, private translate: TranslateService,private titleService: Title) { }

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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("usera.new") );
        });
    }

    onSubmit(f: NgForm) {
        f.value.active_flag = (f.value.active_flag) ? 1 : 0 ;
        let parameter = JSON.stringify(f.value);
        this.usersSubs = this.userApi.addUser(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/users']);
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
                .then(function(result){if (! result.dismiss){c.router.navigate(['/users']);}});
        }
        else {
            this.router.navigate(['/users']);
        }
        return false;
    }
}
