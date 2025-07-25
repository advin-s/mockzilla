import { Component, input } from '@angular/core';
import { DashboardMenuItem } from '../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-card',
  imports: [RouterLink],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
  host:{
    class:'col-12 col-md-6 col-lg-3'
  }
})
export class FeatureCardComponent {
  item = input.required<DashboardMenuItem>()
}
