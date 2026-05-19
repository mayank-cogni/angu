import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title = 'Login Page';
imgUrl = "";
found=true;
isDisabled=false;
username="mohit";
isActive=false;
boxWidth=100;
bgColor="blue";
count=signal(0);
}
