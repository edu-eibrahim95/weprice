import { Injectable } from '@angular/core';
import {API_URL} from '../env';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Installation} from "../Models/installation";

@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  constructor(private http: HttpClient) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }
  get(): Observable<Installation[]>{
    return this.http.get<Installation[]>(`${API_URL}/installations`)
      .catch(InstallationService._handleError);
  }
}
