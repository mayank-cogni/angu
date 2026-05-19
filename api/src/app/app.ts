import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userapi } from './userapi';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');

  // using normal ngOninit to use api services
  // users: any[] =[];
  // constructor(private userService: Userapi){}
  // ngOnInit(){
  //   this.userService.getUsers().subscribe((data:any)=>{
  //     this.users=data;
  //   })
  // }

  //using signal to use api services
  userService = inject(Userapi);
  users:any = toSignal(this.userService.getUsers());

}
