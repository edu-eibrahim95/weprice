import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Employee} from "../../../Models/employee";
import {EmployeeService} from "../../../Services/employee.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

@Component({
    selector: 'app-employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
    formChanged= false;
    employeesSubs: Subscription;
    employees : Employee[];
    branchesSubs: Subscription;
    branches : Branch[];
    constructor(private branchesApi: BranchService, private employeeApi : EmployeeService, private router: Router, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("employa.new") );
        });
    }

    onSubmit(f: NgForm) {
        let employee = JSON.stringify(f.value);
        this.employeesSubs = this.employeeApi.addEmployee(employee).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/employees']);
                    location.reload();
                }
            },
            console.error
        );
    }

    onCancel(){
        if(this.formChanged) {
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/employees']);}});
        }
        else {
            this.router.navigate(['/employees']);
        }
        return false;
    }
}
