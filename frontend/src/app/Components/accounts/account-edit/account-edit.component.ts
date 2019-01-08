import { Component, OnInit } from '@angular/core';
import {Account} from "../../../Models/account";
import {Subscription} from "rxjs";
import {AccountService} from "../../../Services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  account: Account;
  accountsSubs: Subscription;

  constructor(private accountsApi: AccountService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.accountsSubs = this.accountsApi.getAccount(this.route.params['value']['rule_id']).subscribe(res => {
      this.account = res['account'];
    });
  }
    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.accountsSubs = this.accountsApi.editAccount(this.account.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/accounts']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
      if (confirm('Your changes will be lost, Are You Sure ?') ) this.router.navigate(['/accounts']);
      return false;
    }
}