import { Injectable } from '@angular/core';
import {API_URL} from '../env';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Branch} from "../Models/branch";
@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }
  getParents(): Observable<Branch[]>{
    return this.http.get<Branch[]>(`${API_URL}/branches/parent`)
      .catch(BranchService._handleError);
  }
  addBranch(parameter): Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(`${API_URL}/branches/add`, parameter, httpOptions).map(
      res => {
        console.log(res);
        if (res['status'] == 1) {
          return 1;
        }
      },
      err => {
        return 0;
      })
  }
}

