import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Employee} from "../Models/employee";
import {API_URL} from "../env";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    constructor(private http: HttpClient) { }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }
    getEmployees() {
        return this.http.get<Employee[]>(`${API_URL}/employees`)
            .catch(EmployeeService._handleError);
    }
    getEmployeeCostCenters(employee_id) {
        return this.http.get<Employee[]>(`${API_URL}/employees/cost_centers/`+employee_id)
            .catch(EmployeeService._handleError);
    }

    addEmployee(employee) : Observable<number>{
        return this.http.post(`${API_URL}/employees/add`, employee, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    addEmployeeCostCenter(employee_id, employee) : Observable<number>{
        return this.http.post(`${API_URL}/employees/cost_centers/`+employee_id+`/add`, employee, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return res['id'];
                }
            },
            err => {
                return 0;
            })
    }

    deleteEmployee(employee_id, employee) {
        return this.http.post(`${API_URL}/employees/delete/`+employee_id, employee, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    deleteEmployeeCostCenter(employee_id, employee, ec_id) {
        return this.http.post(`${API_URL}/employees/cost_centers/`+employee_id+`/delete/`+ec_id, employee, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }

    getEmployee(id): Observable<Employee>{
        return this.http.get<Employee>(`${API_URL}/employee/`+id)
            .catch(EmployeeService._handleError);
    }

    editEmployee(employee_id, employee): Observable<number>{
        return this.http.post(`${API_URL}/employees/edit/`+employee_id, employee, this.httpOptions).map(
            res => {
                if (res['status'] == 1) {
                    return 1;
                }
            },
            err => {
                return 0;
            })
    }
    editEmployeeCostCenter(employee_id, employee, ec_id): Observable<number>{
        return this.http.post(`${API_URL}/employees/cost_centers/`+employee_id+`/edit/`+ec_id, employee, this.httpOptions).map(
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
