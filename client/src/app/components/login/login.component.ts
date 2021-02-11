import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    this.authService.clearSession();
  }

  email: string = '';
  pwd: string = '';

  login(){
    this.authService.validate(this.email, this.pwd)
    .then((response: any) => {
      this.authService.setUserInfo(response.message["data"]);
      this.router.navigate(['']);
    })
  }

}