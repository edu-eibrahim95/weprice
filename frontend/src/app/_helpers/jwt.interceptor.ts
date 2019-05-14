import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "angular2-cookie/core";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let _cookieService = new CookieService;
        let currentUser = null;
        let branch_id = null;
        if (typeof _cookieService.get('currentUser') !== 'undefined') {
            currentUser = JSON.parse(_cookieService.get("currentUser"));
            branch_id = _cookieService.get("branch_id");
        }
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                },
                setParams: {
                    branch_id: branch_id
                }
            });
        }

        return next.handle(request);
    }
}
