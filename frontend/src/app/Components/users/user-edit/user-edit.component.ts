import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../../Models/user";
import {UserService} from "../../../Services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    formChanged = false;
    userSubs: Subscription;
    user : User;
    constructor(private usersApi: UserService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.userSubs = this.usersApi.getUser(this.route.params['value']['rule_id']).subscribe(res => {
            this.user = res['user'];
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
        f.value.active_flag = (f.value.active_flag) ? 1 : 0 ;
        let user = JSON.stringify(f.value);
        this.userSubs = this.usersApi.editUser(this.user.id, user).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/users']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/users']);
        }
        else {
            this.router.navigate(['/users']);
        }
        return false;
    }
}
