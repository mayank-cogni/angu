import { CommonModule } from '@angular/common';
import { Component, signal,computed, effect } from '@angular/core';
import { count } from 'rxjs';
import {PipeShortNamePipe} from '../pipe/pipe-short-name-pipe';
import {CurrencyPipe} from '../pipe/currency-pipe';

@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [CommonModule,PipeShortNamePipe,CurrencyPipe],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {     
  counter: number = 0;

  handle(val: string) {
    if (val === 'add') {
      this.counter++;
    } else if (val === 'subtract' && this.counter > 0) {
      this.counter--;
    } else if (val === 'reset') {
      this.counter = 0;
    }
  }
    // signals
  check = signal<number[]>([1,2,3,4]);
  user = signal<{name:string,age:number}>({name:'John',age:30});

  count_s = signal<number>(0);

  handle_s(val: string) {       //signal is synchronous
    if (val === 'add') {
      this.count_s.update(n => n + 1);
    } else if (val === 'subtract' && this.count_s() > 0) {
      this.count_s.update(n => n - 1);
    } else if (val === 'reset') {
      this.count_s.set(0);
    }
  }
  //signal with computed (computed are lazy it will not re-evaluate until we call or it is observed(observed means it is used in template or in effect))
  count_a = signal<number>(2);
  double_count = computed<number>(() => this.count_a() * 2);
  triple_count = computed<number>(() => this.count_a() * 3);
  increment(){
    this.count_a.set(this.count_a() + 1);
  }

  first_name = signal<string>('John');
  last_name = signal<string>('Doe');
  full_name = computed<string>(() => `${this.first_name()} ${this.last_name()}`);

  price = signal<number[]>([10,20,30,50]);
  total = computed<number>(() => this.price().reduce((acc, curr) => acc + curr, 0));


  // effect (effect are used to perform side effects when a signal changes
              // effect is of type eager it will re-evaluate immediately when the signal changes)
  // 1. using effect to increment the value
  count_effect = signal(0);
  constructor() {
    // This is the most standard place
    effect(() => {
      console.log('The count is now:', this.count_effect());
    });
  }
  increment_effect(){
    this.count_effect.update(n => n + 1);
  }
  //2. using effect to change theme
  // isDarkMode = signal(false);
  // constructor(){
  //   effect(() => {
  //     if(this.isDarkMode()){
  //       document.body.style.backgroundColor = 'dark-mode';
  //       document.body.style.color = 'white';

  //     }else{
  //       document.body.classList.remove('dark-mode');
  //       document.body.style.backgroundColor = 'black';
  //     }
  // }

  // toggle(){
  //   this.isDarkMode.update(mode=>!mode);
  // }

  //3. using effect to show message for 2 sec
  // right now effect is shynchronus but in future updates it can be async and donot use update and set in this because it can give infinite loop we have to avoid it
  // message = signal("");
  // constructor(){
  //   effect(()=>{
  //     if(this.message()){
  //       setTimeout(()=>{
  //         this.message.set("");
  //       },2000);
  //     }
  //   });
  // }


  // pipes usecase
  lName = 'mayank';
  uName = 'MAYANK';
  today = new Date();

  amount = 2500;

  user1={
    name:"mayank",
    age:21
  }

  fullNames = "Mayank bhatt ok";

  usd=10;
  con_rate=90;

  name_two_way_binding = signal("default_value");

  user_twb = signal<{name:string, age:number}>({
    name:'Mohit',
    age:25
  });
  updateName(value:string){
    this.user_twb.update(u=>({ ...u, name:value}));
  }
  updateAge(value:string){
    this.user_twb.update(u=>({ ...u, age:Number(value)}));
  }

}