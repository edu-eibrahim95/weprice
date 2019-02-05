import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../../Services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginSubs: Subscription;
  returnUrl: string;

  constructor(private authApi: AuthService, private router: Router, private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    let c = this;
    $(document).ready(function() {
      c.titleService.setTitle(  "WePrice - Login");
    });
  }
  onSubmit(f: NgForm) {
    let parameter = JSON.stringify(f.value);
    this.loginSubs = this.authApi.login(parameter).subscribe(res => {
          if (res ==1 ){
            this.router.navigate([this.returnUrl]);
            location.reload();
          }

        },
        console.error
    );
  }
}
