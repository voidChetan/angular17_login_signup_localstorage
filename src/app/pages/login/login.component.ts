import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  isSignDivVisiable: boolean  = true;

  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  constructor(private router: Router){}


  onRegister() {
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert('Registroso exitoso')
  }

  onLogin() {
    debugger;
    const localUsers =  localStorage.getItem('angular17users');
    if(localUsers != null) {
      const users =  JSON.parse(localUsers);

      const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      if(isUserPresent != undefined) {
        alert("Redirigiendo a tu área personal...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        console.log('isUserPresent: ' + isUserPresent);
        console.log(isUserPresent.userType);
        this.router.navigateByUrl('/consultas');
      } else {
        alert("Credenciales incorrectas, o usuario inexistente.")
      }
    }
  }

}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;
  userType: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
    this.userType = "";
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
