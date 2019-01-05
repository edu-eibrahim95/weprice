import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Local} from "../../../Models/local";
import {LocalService} from "../../../Services/local.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-local-add',
  templateUrl: './local-add.component.html',
  styleUrls: ['./local-add.component.css']
})
export class LocalAddComponent implements OnInit {

  localsSubs: Subscription;
    locals : Local[];

    constructor(private localsApi : LocalService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.localsSubs = this.localsApi.addLocal(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/locals']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
