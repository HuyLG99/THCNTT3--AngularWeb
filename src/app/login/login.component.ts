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
  email: string;
  password: string;


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

}
