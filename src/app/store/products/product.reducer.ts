import { createReducer, on } from '@ngrx/store';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
} from './product.actions';
import { ProductState } from '../../types';

export const initialProductState: ProductState = {
  isLoading: false,
  products: [],
  error: {
    message: '',
  },
};

export const productReducer = createReducer(
  initialProductState,
  on(getProducts, (state) => ({ ...state, isLoading: true })),
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    isLoading: false,
  })),
  on(getProductsError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action,
  }))
);
