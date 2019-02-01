import {Component, OnInit} from '@angular/core';
import {Branch} from "../../../Models/branch";
import {Subscription} from "rxjs/Rx";
import {Router, ActivatedRoute} from "@angular/router";
import {BranchService} from "../../../Services/branch.service";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';

@Component({
    selector: 'app-branche-edit',
    templateUrl: './branch-edit.component.html',
    styleUrls: ['./branch-edit.component.css']
})
export class BranchEditComponent implements OnInit {
    branchesSubs: Subscription;
    branches : Branch[];
    branch : Branch;
    formChanged = false;
    constructor(private branchesApi: BranchService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.branchesSubs = this.branchesApi.getParents().subscribe(res => {
            this.branches = res['branches'];
        });
        this.branchesSubs = this.branchesApi.getBranch(this.route.params['value']['rule_id']).subscribe(res => {
            this.branch = res['branch'];
            this.branches = this.branches.filter(e => e.id != this.branch.id);
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
            });
        });

    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.branchesSubs = this.branchesApi.editBranch(this.branch.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/branches']);
                    location.reload();
                }
            },
            console.error
        );
    }

    changeType() {
        let type = $("select[name=type]").val();
        this.branch.type = type;
    }
    onCancel(){
        if(this.formChanged){
            if (confirm('Your changes will be lost, Are You Sure ?') ) this.router.navigate(['/branches']);
        }
        else{
            this.router.navigate(['/branches']);
        }
        return false;
    }

}
