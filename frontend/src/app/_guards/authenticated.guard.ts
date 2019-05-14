import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from "angular2-cookie/core";

@Injectable()
export class AuthenticatedGuard implements CanActivate {

    constructor(private router: Router, private _cookieService: CookieService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (typeof this._cookieService.get('currentUser') === 'undefined') {
            // this is the login page so continue
            return true;
        }
        // logged in so redirect to home page
        this.router.navigate(['/']);
        return false;
    }
}
