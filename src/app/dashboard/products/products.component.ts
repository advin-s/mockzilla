import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../services/products.service';
import { debounceTime, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateInterface, Product } from '../../types';
import { getProducts } from '../../store/products/product.actions';
import { isProductsLoading, products } from '../../store/products/product.selector';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { SearchAndFilterPipe } from '../../pipes/search-and-filter.pipe';

@Component({
  selector: 'app-products',
  imports: [NgbDropdown,NgbDropdownMenu,NgbDropdownToggle,NgbDropdownItem, ProductCardComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  isLoading:boolean = false
  searchText:string = ''

  constructor(private router:ActivatedRoute, private store$:Store<AppStateInterface>, private productsService:ProductsService){
  }

  ngOnInit(): void {
    this.store$.dispatch(getProducts())
    this.store$.select(isProductsLoading).subscribe((res:boolean) => this.isLoading = true)
    this.store$.select(products).subscribe((res:Product[]) => this.products = res)
  }

  searchProducts(){
    this.productsService.searchProducts(this.searchText).pipe(debounceTime(500)).subscribe(res => this.products = res.products)
  }

}

export const productsResolver:ResolveFn<any> = () : Observable<any> =>{
  const productsService = inject(ProductsService)
  return productsService.getProducts()
}
