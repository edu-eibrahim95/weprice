import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {SocialCharge} from "../Models/social_charge";
import {API_URL} from "../env";

@Injectable({
    providedIn: 'root'
})
export class SocialChargeService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getSocialCharges() {
        return this.http.get<SocialCharge[]>(`${API_URL}/social_charges`)
            .catch(SocialChargeService._handleError);
    }

    getSocialChargeAccounts(social_charge_id) {
        return this.http.get<SocialCharge[]>(`${API_URL}/social_charges/accounts/`+social_charge_id)
            .catch(SocialChargeService._handleError);
    }

    addSocialCharge(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/social_charges/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    addSocialChargeAccount(social_charge_id, parameter) : Observable<number>{
        return this.http.post(`${API_URL}/social_charges/accounts/`+social_charge_id+`/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return res['id'];
                }
            },
            err => {
                return 0;
            })
    }

    deleteSocialCharge(social_charge_id, parameter) {
        return this.http.post(`${API_URL}/social_charges/delete/`+social_charge_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    deleteSocialChargeAccount(social_charge_id, parameter, social_charge_account_id) {
        return this.http.post(`${API_URL}/social_charges/accounts/`+social_charge_id+`/delete/`+social_charge_account_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getSocialCharge(id): Observable<SocialCharge>{
        return this.http.get<SocialCharge>(`${API_URL}/social_charge/`+id)
            .catch(SocialChargeService._handleError);
    }

    editSocialCharge(social_charge_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/social_charges/edit/`+social_charge_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    editSocialChargeAccount(social_charge_id, parameter, social_charge_account_id): Observable<number>{
        return this.http.post(`${API_URL}/social_charges/accounts/`+social_charge_id+`/edit/`+social_charge_account_id, parameter, this.httpOptions).map(
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
