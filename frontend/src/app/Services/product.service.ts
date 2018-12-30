import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Product} from "../Models/product";
import {API_URL} from "../env";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getProducts() {
        return this.http.get<Product[]>(`${API_URL}/products`)
            .catch(ProductService._handleError);
    }

    addProduct(product) : Observable<number>{
        return this.http.post(`${API_URL}/products/add`, product, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteProduct(product_id, product) {
        return this.http.post(`${API_URL}/products/delete/`+product_id, product, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getProduct(id): Observable<Product>{
        return this.http.get<Product>(`${API_URL}/product/`+id)
            .catch(ProductService._handleError);
    }

    editProduct(product_id, product): Observable<number>{
        return this.http.post(`${API_URL}/products/edit/`+product_id, product, this.httpOptions).map(
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
