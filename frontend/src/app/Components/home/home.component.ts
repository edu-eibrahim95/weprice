import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Branch} from "../../Models/branch";
import {BranchService} from "../../Services/branch.service";
import * as $ from 'jquery';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import { CookieService } from "angular2-cookie/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    branchesSubs: Subscription;
    branches : Branch[];
    branch :string;
    constructor(private branchesApi: BranchService, private translate: TranslateService,private titleService: Title, private _cookieService: CookieService) { }

    ngOnInit() {
        let c = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
            this.branches = res['branches'];
            this.branch =  this._cookieService.get('branch_id');
            $(document).ready(function () {
                c.titleService.setTitle(  c.translate.instant("globals.project") + ' - ' + c.translate.instant("globals.dashboard") );
            });
        });

    }

    changeBranch() {
        let branch_id = $("select[name=branch_id]").val();
        let branch = this.branches.filter(branch => branch.id==branch_id);
        if (branch.length > 0 ){
            let branch_name = branch[0].name;
            this._cookieService.put('branch_id', branch_id);
            this._cookieService.put('branch_name', branch_name);
            location.reload();
        }
        else {
            this._cookieService.put('branch_id', '0');
        }
        return false;
    }
}
