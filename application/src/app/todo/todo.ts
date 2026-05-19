import { Component,signal } from '@angular/core';
import { Output, EventEmitter, OnInit } from '@angular/core'; // <--- Add these

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  newTodo = signal(' ');
  todos = signal<{text:string, done:boolean}[]>([]);  //array of ojbects
                                                      // to store tasks

  addTodo(){
    const text =this.newTodo().trim();
    if(text === '')
      return;
    this.todos.update(list =>[...list, {text, done: false}]);   
    this.newTodo.set('');
  }
  toggleTodo(index:number){
      this.todos.update(list=>    //list is alias
        list.map((item,i)=>     // item is the real object inside the array and i is the index 
          i === index ?{...item, done: !item.done}:item
        )
      );
    }
    deleteTodo(index:number){
      this.todos.update(list =>
        list.filter((item, i)=>
          i!==index)
      );
    }

    // given below is way to show how we can acces variable from parent to child
    // in parent .ts file   //this is optional
        //   username : 'mayank';
    // in parent .html file  
        //   <app-child [name]="username"></app-child>  //app-child -> name of selector of child
    // in child .ts File        // we also have to import input in child ts file
        //   name=input<string>();
    // in child .html file  
        //   <p>{{  name() }}</p>


    //given below is way to show how we can acces variable from child to parent
  
    // in child .ts File        // we also have to import input in child ts file
        //     message = signal('hello parent from child')
        //       updateMessage(){
        //         this.message.set('Hello from child component');
        //       }
    // in child .html file  
        //   <button (click)="updateMessage()">Update mssg </button>
    // in parent .ts file 
        //   nothing requires
    // in parent .html file  
        //   <app-child #chch></app-child>        //app-child name of selector of child
        // <p> {{ chch.message() }} </p>

}



// to send from child to parent

// in Child.ts file
// @Output() message = new EventEmitter<string>();

//   // 2️⃣ Send data to parent
//   sendMessage() {
//     this.message.emit('Hello Parent!');
//   }

//   // child.html
//   <button (click)="sendMessage()">Send Message</button>

//   //in parent.ts file
//   parentMessage = '';

//   // in parent .html file
//   <app-child (message)="parentMessage = $event"></app-child>
// <p>Message from child: {{ parentMessage }}</p>



// //or if we want to send the data without using click button we can use given below

// @Output() message = new EventEmitter<string>();

//   ngOnInit() {
//     this.message.emit('Hello Parent (sent on load)');
//   }

  