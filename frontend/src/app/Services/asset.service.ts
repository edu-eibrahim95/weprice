import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Asset} from "../Models/asset";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class AssetService {


 httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getAssets() {
        return this.http.get<Asset[]>(`${API_URL}/assets`)
            .catch(AssetService._handleError);
    }

    addAsset(asset) : Observable<number>{
        return this.http.post(`${API_URL}/assets/add`, asset, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteAsset(asset_id, asset) {
        return this.http.post(`${API_URL}/assets/delete/`+asset_id, asset, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getAsset(id): Observable<Asset>{
        return this.http.get<Asset>(`${API_URL}/asset/`+id)
            .catch(AssetService._handleError);
    }

    editAsset(asset_id, asset): Observable<number>{
        return this.http.post(`${API_URL}/assets/edit/`+asset_id, asset, this.httpOptions).map(
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