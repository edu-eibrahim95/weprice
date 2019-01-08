import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Local} from "../../../Models/local";
import {LocalService} from "../../../Services/local.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-local-edit',
  templateUrl: './local-edit.component.html',
  styleUrls: ['./local-edit.component.css']
})
export class LocalEditComponent implements OnInit {

   localsSubs: Subscription;
    local : Local;
    constructor(private localsApi: LocalService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.localsSubs = this.localsApi.getLocal(this.route.params['value']['rule_id']).subscribe(res => {
            this.local = res['local'];
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.localsSubs = this.localsApi.editLocal(this.local.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/locals']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if (confirm('Your changes will be lost, Are You Sure ?') ) this.router.navigate(['/locals']);
        return false;
    }
}
