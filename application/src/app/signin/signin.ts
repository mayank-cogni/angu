import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.html',         
    styleUrl: './signin.css'            // if we have more than one css than we can use array like: styleUrl: ['./signin.css','./signin1.css']
})

// @Component({
//     selector: 'app-signin',
//     template: `<h2>{{ title }}</h2>`,
//     styles: [`
//         h2 {
//             color: green;
//         }
//     `]
// })

export class Signin {
   title = 'Signin Page';
}
