import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../Services/account.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {
    accountsSubs: Subscription;

  constructor(private accountsApi: AccountService, private router: Router) { }

  ngOnInit() {
  }

    onSubmit(f: NgForm) {
    let parameter = JSON.stringify(f.value);
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
