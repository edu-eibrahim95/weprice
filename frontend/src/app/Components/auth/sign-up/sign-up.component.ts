import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../../Services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpSubs: Subscription;

  constructor(private authApi: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    let parameter = JSON.stringify(f.value);
    this.signUpSubs = this.authApi.register(parameter).subscribe(res => {
        if (res ==1 ){
          this.router.navigate(['/']);
          location.reload();
        }
      },
      console.error
    );
  }

}
