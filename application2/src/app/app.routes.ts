import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './dashboard/setting/setting';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {path: 'profile', component: Profile},
            {path: 'setting', component: Setting}
        ]
    },
    {
        path: '', redirectTo:'dashboard', pathMatch:'full'           
        // so this line redirectTo will make the path redirect to this 
        // suppose in path  iahve given citizen and in redirect i have written officer than angular will redirect it to officer 
        //if we dont use pathMatch than it will match by prefix means starts with right now we using full means path should match exactly
    }
];
