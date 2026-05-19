import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private router:Router){}
  openProduct(){
    this.router.navigate(['product',101]);  // to navigate to product with this routes
                                              // 
  }
}


// If your Route Path is...    Your navigate() array should be...      Resulting URL
// path:'products'                 ['products']                        /products
// path: 'product/:id'             ['product', 101]                    /product/101
// path: 'dept/:dId/emp/:eId'      ['dept', 5, 'emp', 22]              /dept/5/emp/22


// Adding Query Parameters
// this.router.navigate(['products'], { 
//   queryParams: { category: 'mobile', sort: 'desc' } 
// });

// { path: 'products/one/than', component: MyComponent }
// this.router.navigate(['products', 'one', 'than']);