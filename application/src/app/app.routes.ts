import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { ContComp } from './cont-comp/cont-comp';
import { AboutComp } from './about-comp/about-comp';

export const routes: Routes = [
    {
        path: '', component: HomeComp
    },
    {
        path: 'contact', component: ContComp
    },
    {
        path: 'about', component: AboutComp
    }
];
