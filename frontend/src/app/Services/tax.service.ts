import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Tax} from "../Models/tax";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class TaxService {
   httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getTaxes() {
        return this.http.get<Tax[]>(`${API_URL}/taxes`)
            .catch(TaxService._handleError);
    }

    addTax(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/taxes/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteTax(tax_id, parameter) {
        return this.http.post(`${API_URL}/taxes/delete/`+tax_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getTax(id): Observable<Tax>{
        return this.http.get<Tax>(`${API_URL}/tax/`+id)
            .catch(TaxService._handleError);
    }

    editTax(tax_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/taxes/edit/`+tax_id, parameter, this.httpOptions).map(
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
