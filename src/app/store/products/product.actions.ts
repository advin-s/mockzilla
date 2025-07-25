import { createAction, props } from '@ngrx/store';
import { Product } from '../../types';

export const getProducts = createAction('[Products] Fetch');

export const getProductsSuccess = createAction(
  '[Products] Fetch Success',
  props<{ products: Product[] }>()
);

export const getProductsError = createAction(
  '[Products] Fetch Error',
  props<{ message: string }>()
);
