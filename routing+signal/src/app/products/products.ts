import { Component,signal, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  search = signal('');
  products = signal<string[]>(['Phone','Laptop','Tablet','Monitor']);
  filtered = signal<string[]>(this.products());


  //ActivatedRoute help us to read information from the uri
  // and Router is used to make them navigate
  constructor(private route: ActivatedRoute, private router:Router){
    //URL to signal
    this.route.queryParamMap.subscribe(parmas=>{
      this.search.set(parmas.get('search') || '');
    });

    //signal to ui updates
    effect(()=>{
      const value = this.search().toLowerCase();
      this.filtered.set(
        this.products().filter(p=>
          p.toLowerCase().includes(value)
        )
      )
    })
  }

  updateURI(){
    this.router.navigate([],{
      queryParams: {search: this.search()},
    })
  }
}
