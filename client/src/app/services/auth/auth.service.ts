import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && Object.keys(JSON.parse(userData)).length){
      return true;
    }
    return false;
  }

  public setUserInfo(user: any){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public validate(email: string, password: string) {
    return this.http.post('/api/authenticate', {'username' : email, 'password' : password}).toPromise()
  }

  public clearSession() {
    localStorage.removeItem('userInfo');
  }
}