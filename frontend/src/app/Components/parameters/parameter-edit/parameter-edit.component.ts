import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ParameterService} from "../../../Services/parameter.service";
import {Parameter} from "../../../Models/parameter";

@Component({
    selector: 'app-parameter-edit',
    templateUrl: './parameter-edit.component.html',
    styleUrls: ['./parameter-edit.component.css']
})
export class ParameterEditComponent implements OnInit {

    parameterSubs: Subscription;
    parameter : Parameter;
    constructor(private parametersApi: ParameterService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.parameterSubs = this.parametersApi.getParameter(this.route.params['value']['rule_id']).subscribe(res => {
            this.parameter = res['parameter'];
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.parameterSubs = this.parametersApi.editParameter(this.parameter.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/parameters']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if (confirm('Your changes will be lost, Are You Sure ?') ) this.router.navigate(['/parameters']);
        return false;
    }
}
