import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types";

export const productsFeatureSelector = (state:AppStateInterface) => state.products

export const products = createSelector(productsFeatureSelector, (state) => state.products)
export const isProductsLoading = createSelector(productsFeatureSelector, (state) => state.isLoading)
export const isProductsLoadingError = createSelector(productsFeatureSelector, (state) => state.error)