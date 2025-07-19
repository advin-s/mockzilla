import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types";

export const selectAuthFeature = (state:AppStateInterface) => state.login

export const isLogginIn = createSelector(selectAuthFeature, (state) => state.isLoading)
export const loginError = createSelector(selectAuthFeature, (state) => state.errorMessage)