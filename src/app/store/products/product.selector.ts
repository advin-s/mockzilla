import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface, Product } from '../../types';

export const productsFeatureSelector = (state: AppStateInterface) =>
  state.products;

export const products = createSelector(
  productsFeatureSelector,
  (state) => state.products
);
export const isProductsLoading = createSelector(
  productsFeatureSelector,
  (state) => state.isLoading
);
export const isProductsLoadingError = createSelector(
  productsFeatureSelector,
  (state) => state.error
);

export const searchproducts = (searchString: string) =>
  createSelector(productsFeatureSelector, (state) =>
    state.products.filter((item: Product) =>
      item.title.toLowerCase().includes(searchString.toLowerCase())
    )
  );
