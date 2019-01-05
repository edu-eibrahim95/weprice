import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router,  Event} from "@angular/router";
import {User} from "./Models/user";
import {Subscription} from "rxjs";
import {Branch} from "./Models/branch";
import {BranchService} from "./Services/branch.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'frontend';
    noHeader  : boolean;
    user : User;
    files_open = '';
    branchesSubs: Subscription;
    branches : Branch[];
    branch_name = localStorage.getItem('branch_name');
    constructor(private router: Router, private branchesApi: BranchService, public translate: TranslateService) { }
    ngOnInit() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd ) {
                let currentUrl = event.url;
                if(currentUrl.includes('register') || currentUrl.includes('login')){
                    this.noHeader = true;
                }
                else if(['/branches', '/cost_centers', '/accounts', '/products', '/employees', '/assets', '/taxes', '/social_charges', '/parameters', '/users'].includes(currentUrl)){
                    this.files_open = 'show-sub';
                }
            }
        });
        if (localStorage.getItem('currentUser')){
            this.user = JSON.parse(localStorage.getItem('currentUser'));
        }
        if (! localStorage.getItem('branch_id')){
            this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
                this.branches = res['branches'];
            });
            if(this.branches.length > 0){
                let branch = this.branches[0];
                this.branch_name = branch.name;
                localStorage.setItem('branch_id', branch.id.toString());
                localStorage.setItem('branch_name', branch.name);
            }
            else {
                localStorage.setItem('branch_id', '0');
            }
        }
        this.translate.addLangs(['en', 'pt']);
        this.translate.setDefaultLang('en');
    }
    logout() {
        localStorage.removeItem('currentUser');
        location.reload();
    }
}
