import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Parameter} from "../../../Models/parameter";
import {ParameterService} from "../../../Services/parameter.service";

@Component({
  selector: 'app-parameter-add',
  templateUrl: './parameter-add.component.html',
  styleUrls: ['./parameter-add.component.css']
})
export class ParameterAddComponent implements OnInit {

    parametersSubs: Subscription;
    parameters : Parameter[];

    constructor(private parameterApi : ParameterService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.parametersSubs = this.parameterApi.addParameter(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/parameters']);
                    location.reload();
                }
            },
            console.error
        );
    }



}
