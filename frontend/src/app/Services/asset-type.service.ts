import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AssetType} from "../Models/asset_type";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService {

  httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getAssetTypes() {
        return this.http.get<AssetType[]>(`${API_URL}/asset_types`)
            .catch(AssetTypeService._handleError);
    }

    addAssetType(parameter) : Observable<number>{
        return this.http.post(`${API_URL}/asset_types/add`, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteAssetType(asset_type_id, parameter) {
        return this.http.post(`${API_URL}/asset_types/delete/`+asset_type_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getAssetType(id): Observable<AssetType>{
        return this.http.get<AssetType>(`${API_URL}/asset_type/`+id)
            .catch(AssetTypeService._handleError);
    }

    editAssetType(asset_type_id, parameter): Observable<number>{
        return this.http.post(`${API_URL}/asset_types/edit/`+asset_type_id, parameter, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }}
