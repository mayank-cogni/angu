import { Injectable, signal } from "@angular/core";

interface User {
    name : string;
    role : 'admin' | 'user';
}

@Injectable({
    providedIn: 'root',
})

export class UsersStore{
    user = signal<User | null>(null);
    login(name : string, role : 'admin' |'user'){
        this.user.set({name,role});
    }
    logout(){
        this.user.set(null);
    }
    isAdmin(){
        return this.user()?.role === 'admin';
//         Without the ?: If a user is not logged in (user = null), trying to read null.role would throw a massive error: TypeError: Cannot read properties of null.

// With the ?: If the user is null, the expression simply returns undefined. Since undefined is not equal to 'admin', it safely returns false.
    }
}


// to use this in other component we can use constructor way and through inject way 
// ( protected store = inject(UserStore); )

// (Shared Service)
// First, we create a service to hold the shared data.

// TypeScript
// import { Injectable, signal } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class UserStore {
//   // The shared source of truth
//   userState = signal({ name: '', email: '' });

//   updateUser(data: { name: string; email: string }) {
//     this.userState.set(data);
//   }
// }

// 2. The Component with Reactive Form
// In the component, we inject the store and link it to the form.

// TypeScript
// import { Component, inject } from '@angular/core';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { UserStore } from './user.store';
// import { toSignal } from '@angular/core/rxjs-interop';

// @Component({
//   selector: 'app-user-form',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   template: `
//     <form [formGroup]="form">
//       <input formControlName="name" placeholder="Name">
//       <input formControlName="email" placeholder="Email">
//     </form>

//     <p>Live Store Preview: {{ store.userState().name }}</p>
//   `
// })
// export class UserFormComponent {
//   // 1. Inject the Store and FormBuilder (Modern alternative to constructor)
//   protected store = inject(UserStore);
//   private fb = inject(FormBuilder);

//   // 2. Initialize the Reactive Form
//   form = this.fb.group({
//     name: [''],
//     email: ['']
//   });

//   // 3. Create a Signal from the form's value changes
//   // This automatically syncs the Form to the Store
//   private formValues = toSignal(this.form.valueChanges);

//   constructor() {
//     // Effect runs whenever formValues changes, updating the global store
//     import { effect } from '@angular/core';
//     effect(() => {
//       const val = this.formValues();
//       if (val) {
//         this.store.updateUser(val as any);
//       }
//     });
//   }
// }


