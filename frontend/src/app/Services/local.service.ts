import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Local} from "../Models/local";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

 httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getLocals() {
        return this.http.get<Local[]>(`${API_URL}/locals`)
            .catch(LocalService._handleError);
    }

    addLocal(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/locals/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteLocal(local_id, parameter) {
        return this.http.post(`${API_URL}/locals/delete/`+local_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getLocal(id): Observable<Local>{
        return this.http.get<Local>(`${API_URL}/local/`+id)
            .catch(LocalService._handleError);
    }

    editLocal(local_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/locals/edit/`+local_id, parameter, this.httpOptions).map(
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
