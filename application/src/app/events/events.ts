import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',           //we will use this to add this in html page
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  arr =['HTML', 'CSS', 'JavaScript', 'Angular'];
  users=[
    {name:'John', age:30},
    {name:'Jane', age:25},
    {name:'Doe', age:35}
  ];
  fruits=['apple', 'banana', 'orange', 'grape'];
  removeFruit(i: number){
    this.fruits.splice(i, 1);   // go t index i and remove 1 element from the array
  }

  categories ='';
  updateC(property : string){
    this.categories = property.toLowerCase();
  }
  page: string='Home';
  isLoggedIn = true;
  marks = 85;
  count1=0;
  increment(){
    this.count1++;
  }

  count2=signal(0);   //Use a Signal When...
                      // The variable is "Live State." If the value changes over time and that change needs to trigger a reaction in the UI or other parts of your logic, use a Signal.
  increment2(){
    this.count2.update(count=>count+1);
  }
  showEvent(e: any){
    console.log(e);
  }

  username = ' ';
  updateUser(value : string){
    this.username = value;
  }

  handleSubmit(e:any){
    e.preventDefault();
    console.log('Form submitted!');
  }

}
