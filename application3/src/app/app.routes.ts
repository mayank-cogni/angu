import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path:'home', component: Home},
    {
        path:'admin',
        loadComponent: () => import('./admin/admin').then(m=>m.Admin)       //this is the line which is making the admin work as lazy component
    }
];
