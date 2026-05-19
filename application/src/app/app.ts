import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signin } from './signin/signin';
import { Events } from './events/events';
import { CounterApp } from './counter-app/counter-app';
import { Todo } from './todo/todo';
import { CounterStore } from './core/store/counter';
import { UsersStore } from './core/store/user';
import { FormControl, FormsModule } from '@angular/forms';
import {FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Card } from './card/card';
import { Button } from './button/button';
@Component({
  selector: 'app-root',
  imports: [Login,Signin,Events,CounterApp,Todo,FormsModule,ReactiveFormsModule,CommonModule,Card,Button,RouterLink,RouterOutlet],         // name of the class
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "app-page";
  message="";
  onSave(msg:string){
    console.log(msg);
    this.message=msg;
  }
  
  // constructor(public counterStore:CounterStore){}   // for counter store usage
  // constructor(public userStore:UsersStore){}

    // given below using ngmodel for forms
  // name = signal('');
  // email = signal('');
  // submitForm(){
  //   console.log(`name: ${this.name()}, email: ${this.email()}`);
  // }
  

  // given below using using reactiver form with signal
  userSignal = signal({name:'',email:''});
  // this above is equivalent to: 
  // userSignal = signal<{ name: string; email: string }>({
  //   name: '',
  //   email: '',
  // });
  form:any;     //this should match the name in html <form [formGroup]="form">

  constructor (private fb:FormBuilder){
    this.form = this.fb.group({
      name:[''],
      // namee: new FormControl('',[]),
      email:['']
    })
    this.form.valueChanges.subscribe((value:any)=>{
      this.userSignal.set(value);
    });
  }

  submitForm(){
    console.log(`Name: ${this.userSignal().name}, Email: ${this.userSignal().email}`);
  }

}
// export class App {
//   // protected readonly title = signal('application');
//   name = "tutorial";
//   age=23;
//   isAdmin=true;
//   title = signal('application ok');
//   getUser(){
//     return "mayank";
//   }
// }




