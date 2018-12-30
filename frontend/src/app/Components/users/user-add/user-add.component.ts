import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../../Models/user";
import {UserService} from "../../../Services/user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  usersSubs: Subscription;
  users : User[];

  constructor(private userApi : UserService, private router: Router) { }

  ngOnInit() {
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
}
