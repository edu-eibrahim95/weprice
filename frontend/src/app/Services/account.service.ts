import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Account} from "../Models/account";
import {API_URL} from "../env";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getAccounts() {
        return this.http.get<Account[]>(`${API_URL}/accounts`)
            .catch(AccountService._handleError);
    }
    getAccountCostCenters(account_id) {
        return this.http.get<Account[]>(`${API_URL}/accounts/cost_centers/`+account_id)
            .catch(AccountService._handleError);
    }
    addAccount(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/accounts/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    addAccountCostCenter(account_id, parameter) : Observable<number>{
        return this.http.post(`${API_URL}/accounts/cost_centers/`+account_id+`/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return res['id'];
                }
            },
            err => {
                return 0;
            })
    }
    editAccountCostCenter(account_id, parameter, account_cost_center_id) : Observable<number>{
        return this.http.post(`${API_URL}/accounts/cost_centers/`+account_id+`/edit/`+account_cost_center_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return res['id'];
                }
            },
            err => {
                return 0;
            })
    }
    deleteAccount(account_id, parameter) {
        return this.http.post(`${API_URL}/accounts/delete/`+account_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteAccountCostCenter(account_id, parameter, account_cost_center_id) {
        return this.http.post(`${API_URL}/accounts/cost_centers/`+account_id+`/delete/`+account_cost_center_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getAccount(id): Observable<Account>{
        return this.http.get<Account>(`${API_URL}/account/`+id)
            .catch(AccountService._handleError);
    }

    editAccount(account_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/accounts/edit/`+account_id, parameter, this.httpOptions).map(
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
