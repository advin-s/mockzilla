import { Component } from '@angular/core';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { DashboardMenuItem } from '../../types';

@Component({
  selector: 'app-home',
  imports: [FeatureCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  menuItems: DashboardMenuItem[] = [
    {
      name: 'Products',
      count: 100,
      redirectUrl: 'products',
      imgSrc:
        'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Recipes',
      count: 100,
      redirectUrl: 'recipes',
      imgSrc:
        'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
}
