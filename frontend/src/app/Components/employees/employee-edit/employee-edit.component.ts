import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Employee} from "../../../Models/employee";
import {EmployeeService} from "../../../Services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Branch} from "../../../Models/branch";
import {BranchService} from "../../../Services/branch.service";

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
    branchesSubs: Subscription;
    branches : Branch[];
    employeeSubs: Subscription;
    employee : Employee;
    constructor(private branchesApi: BranchService, private employeesApi: EmployeeService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
        });
        this.employeeSubs = this.employeesApi.getEmployee(this.route.params['value']['rule_id']).subscribe(res => {
            this.employee = res['employee'];
        });
    }

    onSubmit(f: NgForm) {
        let employee = JSON.stringify(f.value);
        this.employeeSubs = this.employeesApi.editEmployee(this.employee.id, employee).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/employees']);
                    location.reload();
                }
            },
            console.error
        );
    }

}
