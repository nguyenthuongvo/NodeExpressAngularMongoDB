import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer/customer.model'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<any> {
    return this.http.get("/api/customers");
  }

  public create(customer: Customer): Observable<any> {
    console.log(customer);
    return this.http.post("/api/customers", Object.assign({}, customer));
  }

  public save(customer: Customer): Observable<any> {
    console.log(customer);
    return this.http.put("/api/customers/" + customer.id, Object.assign({}, customer));
  }

}
