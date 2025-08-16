import { createReducer, on } from '@ngrx/store';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
  searchProducts,
  searchProductsError,
  searchProductsSuccess,
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
  })),
  on(searchProducts, (state) => ({ ...state, isLoading: true })),
  on(searchProductsSuccess, (state, { products }) => ({
    ...state,
    isLoading: false,
    products: [...new Set([...state.products, ...products])],
  })),
  on(searchProductsError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action,
  }))
);
