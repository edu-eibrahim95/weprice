import { Injectable } from '@angular/core';
import {API_URL} from '../env';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Branch} from "../Models/branch";
@Injectable({
  providedIn: 'root'
})
export class BranchService {
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  constructor(private http: HttpClient) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }
  getParents(): Observable<Branch[]>{
    return this.http.get<Branch[]>(`${API_URL}/branches/parent`)
      .catch(BranchService._handleError);
  }
  getBranches(): Observable<Branch[]>{
    return this.http.get<Branch[]>(`${API_URL}/branches`)
      .catch(BranchService._handleError);
  }
  getBranch(id): Observable<Branch>{
    return this.http.get<Branch>(`${API_URL}/branch/`+id)
      .catch(BranchService._handleError);
  }
  addBranch(parameter): Observable<number>{
    return this.http.post(`${API_URL}/branches/add`, parameter, this.httpOptions).map(
      res => {
        if (res['status'] == 1) {
          return 1;
        }
      },
      err => {
        return 0;
      })
  }
  editBranch(branch_id, parameter): Observable<number>{
    return this.http.post(`${API_URL}/branches/edit/`+branch_id, parameter, this.httpOptions).map(
      res => {
        if (res['status'] == 1) {
          return 1;
        }
      },
      err => {
        return 0;
      })
  }
  deleteBranch(branch_id, parameter): Observable<number>{
    return this.http.post(`${API_URL}/branches/delete/`+branch_id, parameter, this.httpOptions).map(
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

