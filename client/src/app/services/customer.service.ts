import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_CUSTOMER = "http://localhost:8080/api/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<any> {
    return this.http.get(URL_CUSTOMER);
  }

  public save(customer: any): Observable<any> {
    return this.http.post(URL_CUSTOMER, Object.assign({}, customer));
  }

}
