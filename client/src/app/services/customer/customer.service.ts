import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public save(customer: any): Observable<any> {
    return this.http.post("/api/customers", Object.assign({}, customer));
  }

}
