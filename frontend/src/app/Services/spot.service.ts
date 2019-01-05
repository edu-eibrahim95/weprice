import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Spot} from "../Models/spot";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class SpotService {

   httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getSpots() {
        return this.http.get<Spot[]>(`${API_URL}/spots`)
            .catch(SpotService._handleError);
    }

    addSpot(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/spots/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteSpot(spot_id, parameter) {
        return this.http.post(`${API_URL}/spots/delete/`+spot_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getSpot(id): Observable<Spot>{
        return this.http.get<Spot>(`${API_URL}/spot/`+id)
            .catch(SpotService._handleError);
    }

    editSpot(spot_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/spots/edit/`+spot_id, parameter, this.httpOptions).map(
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
