import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InstallationService} from "../../../Services/installation.service";
import {Subscription} from "rxjs/Rx";
import {Installation} from "../../../Models/installation";
import {BranchService} from "../../../Services/branch.service";
import {Branch} from "../../../Models/branch";
import {NgForm} from "@angular/forms";
import * as $ from 'jquery';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import swal from "sweetalert2";

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
    formChanged= false;
    constructor(private installationApi: InstallationService,private branchesApi: BranchService, private router: Router, private translate: TranslateService,private titleService: Title) { }

    ngOnInit() {
        this.installationSubs = this.installationApi.get().subscribe(res => {
            this.installations = res['installations'];
        });
        this.branchesSubs = this.branchesApi.getParents().subscribe(res => {
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
            c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("brancha.new") );
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
    onCancel(){
        if(this.formChanged){
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/branches']);}});
        }
        else{
            this.router.navigate(['/branches']);
        }
        return false;
    }
}
