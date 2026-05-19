import { Routes } from '@angular/router';
import { ProductComp } from './product-comp/product-comp';
import { ProductQueryParam } from './product-query-param/product-query-param';

export const routes: Routes = [
    {path: 'product/:id', component:ProductComp},
    {path: 'products', component:ProductQueryParam}
];
