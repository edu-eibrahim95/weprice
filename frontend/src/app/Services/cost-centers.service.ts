import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {API_URL} from "../env";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {CostCenter} from "../Models/cost_center";
import {Ratio} from "../Models/cost_center_raio";

@Injectable({
    providedIn: 'root'
})
export class CostCentersService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    addCostCenter(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/cost_centers/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    addCostCenterRatio(type, val, parameter) : Observable<number>{
        return this.http.post(`${API_URL}/cost_centers/`+type+`/`+val+`/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return res['id'];
                }
            },
            err => {
                return 0;
            })
    }
    editCostCenterRatio(type, val, cost_center_id, parameter) : Observable<number>{
        return this.http.post(`${API_URL}/cost_centers/`+type+`/`+val+`/edit/`+cost_center_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteCostCenterRatio(type, val, cost_center_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/cost_centers/`+type+`/`+val+`/delete/`+cost_center_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    editCostCenter(id, parameter) : Observable<number>{
        return this.http.post(`${API_URL}/cost_centers/edit/`+id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getCostCenters(): Observable<CostCenter[]>{
        return this.http.get<CostCenter[]>(`${API_URL}/cost_centers`)
            .catch(CostCentersService._handleError);
    }

    deleteCostCenter(cost_center_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/cost_centers/delete/`+cost_center_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getCostCenter(id): Observable<CostCenter>{
        return this.http.get<CostCenter>(`${API_URL}/cost_center/`+id)
            .catch(CostCentersService._handleError);
    }
    getCostCenterRatio(id): Observable<Ratio[]>{
        return this.http.get<Ratio[]>(`${API_URL}/cost_centers/ratio/`+id)
            .catch(CostCentersService._handleError);
    }

}
