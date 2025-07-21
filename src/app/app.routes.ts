import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent,
        title:'Login to Mockzilla'
    },
    {
        path:'dashboard',
        canMatch:[authGuard],
        loadComponent : () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        title:'Welcome to mockzilla dashboard'
    }
];
