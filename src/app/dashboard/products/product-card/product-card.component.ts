import { Component, input } from '@angular/core';
import { Product } from '../../../types';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-card',
  imports: [NgbRatingModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  host:{
    class:'col-12 col-md-6 col-lg-3'
  }
})
export class ProductCardComponent {
product = input.required<Product>()

constructor(private ratingConfig:NgbRatingConfig){
  ratingConfig.max = 5;
  ratingConfig.readonly = true
}
}
