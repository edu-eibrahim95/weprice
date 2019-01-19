import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Employee} from "../../../Models/employee";
import {EmployeeService} from "../../../Services/employee.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

    employeesSubs: Subscription;
    employees : Employee[];
    branchesSubs: Subscription;
    branches : Branch[];
    constructor(private branchesApi: BranchService, private employeeApi : EmployeeService, private router: Router) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
        $(document).ready(function () {
            let float_inputs = $(".float-input");
            float_inputs.each(function () { $(this).val(parseFloat($(this).val()).toFixed(2)); });
            float_inputs.on('change',function() {
                $(this).val(parseFloat($(this).val()).toFixed(2));
            });
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


}
