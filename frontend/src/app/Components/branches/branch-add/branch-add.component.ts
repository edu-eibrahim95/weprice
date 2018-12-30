import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InstallationService} from "../../../Services/installation.service";
import {Subscription} from "rxjs/Rx";
import {Installation} from "../../../Models/installation";
import {BranchService} from "../../../Services/branch.service";
import {Branch} from "../../../Models/branch";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css']
})
export class BranchAddComponent implements OnInit {
  installationSubs: Subscription;
  branchesSubs: Subscription;
  installations : Installation[];
  branches : Branch[];
  constructor(private installationApi: InstallationService,private branchesApi: BranchService, private router: Router) { }

  ngOnInit() {
    this.installationSubs = this.installationApi.get().subscribe(res => {
      this.installations = res['installations'];
      console.log(this.installations);
    });
    this.branchesSubs = this.branchesApi.getParents().subscribe(res => {
      this.branches = res['branches'];
      console.log(this.branches);
    });
  }

  onSubmit(f: NgForm) {
    let parameter = JSON.stringify(f.value);
    this.branchesSubs = this.branchesApi.addBranch(parameter).subscribe(res => {
        if (res ==1 ){
          this.router.navigate(['/branches']);
          location.reload();
        }
      },
      console.error
    );
  }

   changeType() {
    let type = $("select[name=type]").val();
    if (type == 0){
      $("#parent_branch").addClass("d-none");
    }
    else {
      $("#parent_branch").removeClass("d-none");
    }
  }

}
