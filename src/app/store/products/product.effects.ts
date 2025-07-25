import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
} from './product.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()

export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductsService);

  fetchProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProducts),
    mergeMap(() =>
      this.productService.getProducts().pipe(
        map(
          (data: any) => {
            return getProductsSuccess({ products: data.products });
          },
          catchError((error: any) => of(getProductsError(error)))
        )
      )
    )
  ))
}
