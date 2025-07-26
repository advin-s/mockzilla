import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateInterface, Product } from '../../types';
import { getProducts } from '../../store/products/product.actions';
import { isProductsLoading, products } from '../../store/products/product.selector';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [NgbDropdown,NgbDropdownMenu,NgbDropdownToggle,NgbDropdownItem, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  isLoading:boolean = false

  constructor(private router:ActivatedRoute, private store$:Store<AppStateInterface>){
    console.log(this.router.snapshot.data);
    
  }

  ngOnInit(): void {
    this.store$.dispatch(getProducts())
    this.store$.select(isProductsLoading).subscribe((res:boolean) => this.isLoading = true)
    this.store$.select(products).subscribe((res:Product[]) => this.products = res)
  }

}

export const productsResolver:ResolveFn<any> = () : Observable<any> =>{
  const productsService = inject(ProductsService)
  return productsService.getProducts()
}
