import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-comp',
  imports: [],
  templateUrl: './product-comp.html',
  styleUrl: './product-comp.css',
})
export class ProductComp {

  // usage of routes-param
  productId: string;

  constructor(private route: ActivatedRoute){
    this.productId=this.route.snapshot.paramMap.get('id') || '';  // snapshot is used for static 
    // this requires refresh or hard load
    //this is routes param

    this.route.paramMap.subscribe( ( params)=> {
      this.productId = params.get('id') || '';    // routes param this is 
    })
  }
}
 