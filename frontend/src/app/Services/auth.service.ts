import { Injectable } from '@angular/core';
import {API_URL} from '../env';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import "rxjs-compat/add/operator/map";
import { CookieService } from "angular2-cookie/core";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _cookieService: CookieService) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }
  register(parameter):  Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(`${API_URL}/register`, parameter, httpOptions).map(
        res => {
          if (res['message'] == 1) {
            this._cookieService.put("currentUser",  JSON.stringify(res['user']));
            this._cookieService.put("lang", res['lang']);
            return 1;
          }
        },
        err => {
          return 0;
        })}
  login(parameter):  Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(`${API_URL}/login`, parameter, httpOptions).map(
        res => {
          if (res['message'] == 1) {
            this._cookieService.put("currentUser",  JSON.stringify(res['user']));
            this._cookieService.put("lang", res['lang']);
            return 1;
          }
        },
        err => {
          return 0;
        });
  }
  logout() {
    // remove user from local storage to log user out
    this._cookieService.remove("currentUser");
    this._cookieService.remove("lang");
    this._cookieService.remove("branch_id");
    this._cookieService.remove("branch_name");
  }
}
