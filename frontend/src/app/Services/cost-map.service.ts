import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {CostMap} from "../Models/cost_map";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class CostMapService {

     httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getCostMaps() {
        return this.http.get<CostMap[]>(`${API_URL}/cost_maps`)
            .catch(CostMapService._handleError);
    }

    addCostMap(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/cost_maps/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
                return res['errors']
            },
            err => {
                return 0;
            })
    }
    deleteCostMap(cost_map_id, parameter) {
        return this.http.post(`${API_URL}/cost_maps/delete/`+cost_map_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    recalcCostMap(cost_map_id, parameter) {
        return this.http.post(`${API_URL}/cost_map/recalculate/`+cost_map_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    inUseCostMap(cost_map_id, parameter) {
        return this.http.post(`${API_URL}/cost_map/in_use/`+cost_map_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getCostMap(id): Observable<CostMap>{
        return this.http.get<CostMap>(`${API_URL}/cost_map/`+id)
            .catch(CostMapService._handleError);
    }

    editCostMap(cost_map_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/cost_maps/edit/`+cost_map_id, parameter, this.httpOptions).map(
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
