import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Branch} from "../../Models/branch";
import {BranchService} from "../../Services/branch.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    branchesSubs: Subscription;
    branches : Branch[];
    branch :string;
    constructor(private branchesApi: BranchService) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
            this.branch =  localStorage.getItem('branch_id');
        });
    }

    changeBranch() {
        let branch_id = $("select[name=branch_id]").val();
        let branch = this.branches.filter(branch => branch.id==branch_id);
        if (branch.length > 0 ){
            let branch_name = branch[0].name;
            localStorage.setItem('branch_id', branch_id);
            localStorage.setItem('branch_name', branch_name);
            location.reload();
        }
        else {
            localStorage.setItem('branch_id', '0');
        }
        return false;
    }
}
