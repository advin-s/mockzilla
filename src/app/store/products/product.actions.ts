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

export const searchProducts = createAction(
  '[Products] Search proucts',
  props<{ searchString: string }>()
);

export const searchProductsSuccess = createAction(
  '[Products] Product Search Success',
  props<{ products: Product[] }>()
);

export const searchProductsError = createAction(
  '[Products] product Search Error',
  props<{ message: string }>()
);
