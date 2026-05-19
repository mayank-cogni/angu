import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-query-param',
  imports: [],
  templateUrl: './product-query-param.html',
  styleUrl: './product-query-param.css',
})
export class ProductQueryParam {
   //usage of query param
  category: string|null = null;
  sort: string|null = null;
  constructor(private route: ActivatedRoute){
    this.route.queryParamMap.subscribe(params=>{
      this.category = params.get('category');
      this.sort = params.get('sort');
    })
  }
}
