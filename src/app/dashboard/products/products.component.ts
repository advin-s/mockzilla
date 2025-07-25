import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../types';
import { getProducts } from '../../store/products/product.actions';

@Component({
  selector: 'app-products',
  imports: [NgbDropdown,NgbDropdownMenu,NgbDropdownToggle,NgbDropdownItem],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  constructor(private router:ActivatedRoute, private store$:Store<AppStateInterface>){
    console.log(this.router.snapshot.data);
    
  }

  ngOnInit(): void {
    this.store$.dispatch(getProducts())
  }

}

export const productsResolver:ResolveFn<any> = () : Observable<any> =>{
  const productsService = inject(ProductsService)
  return productsService.getProducts()
}
