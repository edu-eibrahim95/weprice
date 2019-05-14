import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router,  Event} from "@angular/router";
import {User} from "./Models/user";
import {Subscription} from "rxjs";
import {Branch} from "./Models/branch";
import {BranchService} from "./Services/branch.service";
import {TranslateService} from "@ngx-translate/core";
import { CookieService } from "angular2-cookie/core";
import {HttpClient} from "@angular/common/http";

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
    branch_name = null;
    constructor(private router: Router, private branchesApi: BranchService, public translate: TranslateService, private _cookieService: CookieService) { }
    ngOnInit() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd ) {
                let currentUrl = event.url;
                if(currentUrl.includes('register') || currentUrl.includes('login')){
                    this.noHeader = true;
                }
                else if(['/branches', '/cost_centers', '/accounts', '/products', '/employees', '/assets', '/taxes', '/social_charges', '/parameters', '/users'].includes(currentUrl)){
                    this.files_open = 'show-sub active';
                }
            }
        });
        if (typeof this._cookieService.get('currentUser') !== 'undefined'){
            this.user = JSON.parse(this._cookieService.get('currentUser'));

            if (typeof this._cookieService.get('branch_id') === 'undefined' || this._cookieService.get('branch_id') == '0' ){
                this.branchesSubs = this.branchesApi.getBranches().subscribe(res => {
                    this.branches = res['branches'];
                    if(this.branches.length > 0){
                        let branch = this.branches[0];
                        this.branch_name = branch.name;
                        this._cookieService.put('branch_id', branch.id.toString());
                        this._cookieService.put('branch_name', branch.name);
                    }
                    else {
                        this._cookieService.put('branch_id', '0');
                    }
                });
            }
        }
        this.translate.addLangs(['en', 'pt']);
        let lang = 'en';
        if(typeof this._cookieService.get('lang') !== 'undefined'){
            lang = this._cookieService.get('lang');
        }
        this.translate.setDefaultLang(lang);
    }
    logout() {
        this._cookieService.remove("currentUser");
        this._cookieService.remove("lang");
        this._cookieService.remove("branch_id");
        this._cookieService.remove("branch_name");
        location.reload();
    }
}
