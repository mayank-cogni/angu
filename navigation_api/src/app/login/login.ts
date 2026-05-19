import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router:Router){}
  login(){      // here we are redirecting to dashboard page
    this.router.navigate(['dashboard']);      //used to move to different page withhout reloading
                                              //as in here we are moving from login to dashboard without reloading
  }
}
