import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {EntryAccount} from "../Models/entry_account";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class EntryAccountService {

  
   httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getEntryAccounts(parameter=JSON.stringify({})) {
        parameter = JSON.parse(parameter);
        let params = '?';
        for (let i = 0; i< Object.keys(parameter).length; i++){
            console.log(Object.keys(parameter)[i], Object.keys(parameter));
            params += Object.keys(parameter)[i] + '=' + parameter[Object.keys(parameter)[i]] + '&';
        }
        return this.http.get<EntryAccount[]>(`${API_URL}/entry_accounts`+params)
            .catch(EntryAccountService._handleError);
    }

    addEntryAccount(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/entry_accounts/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteEntryAccount(entry_account_id, parameter) {
        return this.http.post(`${API_URL}/entry_accounts/delete/`+entry_account_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getEntryAccount(id): Observable<EntryAccount>{
        return this.http.get<EntryAccount>(`${API_URL}/entry_account/`+id)
            .catch(EntryAccountService._handleError);
    }

    editEntryAccount(entry_account_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/entry_accounts/edit/`+entry_account_id, parameter, this.httpOptions).map(
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
