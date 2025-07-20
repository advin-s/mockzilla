import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent,
        title:'Login to Mockzilla'
    },
    {
        path:'dashboard',
        loadComponent : () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        title:'Welcome to mockzilla dashboard'
    }
];
