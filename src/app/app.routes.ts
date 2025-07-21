import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login to Mockzilla',
  },
  {
    path: 'dashboard',
    canMatch: [authGuard],
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    title: 'Welcome to mockzilla dashboard',
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./dashboard/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'recipes',
        loadComponent: () =>
          import('./dashboard/recipes/recipes.component').then(
            (c) => c.RecipesComponent
          ),
        title: 'Recipes',
      },
    ],
  },
];
