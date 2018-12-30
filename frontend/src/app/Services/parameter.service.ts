import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Parameter} from "../Models/parameter";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getParameters() {
        return this.http.get<Parameter[]>(`${API_URL}/parameters`)
            .catch(ParameterService._handleError);
    }

    addParameter(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/parameters/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteParameter(parameter_id, parameter) {
        return this.http.post(`${API_URL}/parameters/delete/`+parameter_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getParameter(id): Observable<Parameter>{
        return this.http.get<Parameter>(`${API_URL}/parameter/`+id)
            .catch(ParameterService._handleError);
    }

    editParameter(parameter_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/parameters/edit/`+parameter_id, parameter, this.httpOptions).map(
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
