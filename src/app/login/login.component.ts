import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:'' ;
  password: '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; 


  constructor(
    public authService: AuthService,
    private router: Router,
    ) { }
  
  ngOnInit(): void{
  }
  
  
  async loginwithGoogle(){
    await this.authService.loginwithGoogle();
    this.router.navigate(['/dashboard']);
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/dashboard'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email, password) {
    if (email.lenght == 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght == 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
}
