import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  email: string = '';
  passowrd: string = '';
  constructor(private Auth: AuthServiceService) {}

  ngOnInit(): void {}

  Login() {
    if (this.email == '') {
      alert('برجاء ادخال الايميل');
      return;
    }
    if (this.passowrd == '') {
      alert('برجاء ادخال كلمة المرور');
      return;
    }

    this.Auth.Login(this.email,this.passowrd);
    this.email='';
    this.passowrd='';
  }

}
