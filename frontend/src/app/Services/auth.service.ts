import { Injectable } from '@angular/core';
import {API_URL} from '../env';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import "rxjs-compat/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }
  register(parameter):  Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(`${API_URL}/register`, parameter, httpOptions).map(
      res => {
        console.log(res);
        if (res['message'] == 1) {
          localStorage.setItem('currentUser', res['user']);
          return 1;
        }
      },
      err => {
        console.log("Error occurred");
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
          localStorage.setItem('currentUser', JSON.stringify(res['user']));
          return 1;
        }
      },
      err => {
        console.log("Error occurred");
        return 0;
      });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
