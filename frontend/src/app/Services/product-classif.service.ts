import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Product} from "../Models/product";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class ProductClassifService {
  
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getProductClassifs() {
        return this.http.get<Product[]>(`${API_URL}/product_classifs`)
            .catch(ProductClassifService._handleError);
    }
    getProductTaxes(product_id) {
        return this.http.get<Product[]>(`${API_URL}/product_classifs/taxes/`+product_id)
            .catch(ProductClassifService._handleError);
    }
    getProductSubs(product_id) {
        return this.http.get<Product[]>(`${API_URL}/product_classifs/subs/`+product_id)
            .catch(ProductClassifService._handleError);
    }

    addProductClassif(product) : Observable<number>{
        return this.http.post(`${API_URL}/product_classifs/add`, product, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    addProductClassifSubs(type, product_id, product) : Observable<number>{
        return this.http.post(`${API_URL}/product_classifs/`+type+`/`+product_id+`/add`, product, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return res['id'];
                }
            },
            err => {
                return 0;
            })
    }

    deleteProductClassif(product_id, product) {
        return this.http.post(`${API_URL}/product_classifs/delete/`+product_id, product, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    deleteProductClassifSubs(type, product_id, product, product_tax_id) {
        return this.http.post(`${API_URL}/product_classifs/`+type+`/`+product_id+`/delete/`+product_tax_id, product, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getProductClassif(id): Observable<Product>{
        return this.http.get<Product>(`${API_URL}/product_classif/`+id)
            .catch(ProductClassifService._handleError);
    }

    editProductClassif(product_id, product): Observable<number>{
        return this.http.post(`${API_URL}/product_classifs/edit/`+product_id, product, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    editProductClassifSubs(type, product_id, product, product_tax_id): Observable<number>{
        return this.http.post(`${API_URL}/product_classifs/`+type+`/`+product_id+`/edit/`+product_tax_id, product, this.httpOptions).map(
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
