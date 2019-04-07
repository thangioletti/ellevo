import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private service: LoginService;
  constructor(private router: Router) { 
    this.service = new LoginService(this.router);      
  }

  ngOnInit() {
  }

}
