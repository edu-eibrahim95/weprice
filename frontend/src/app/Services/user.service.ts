import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "../Models/user";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class UserService {


 httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getUsers() {
        return this.http.get<User[]>(`${API_URL}/users`)
            .catch(UserService._handleError);
    }

    addUser(user) : Observable<number>{
        return this.http.post(`${API_URL}/users/add`, user, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteUser(user_id, user) {
        return this.http.post(`${API_URL}/users/delete/`+user_id, user, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getUser(id): Observable<User>{
        return this.http.get<User>(`${API_URL}/user/`+id)
            .catch(UserService._handleError);
    }

    editUser(user_id, user): Observable<number>{
        return this.http.post(`${API_URL}/users/edit/`+user_id, user, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
}
