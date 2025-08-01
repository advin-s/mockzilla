import { createAction, props } from "@ngrx/store";
import { AuthData } from "../../interfaces";
import { LoginData, loginError } from "../../types";


export const login = createAction('[Auth] Login', props<{loginData:LoginData}>())
export const loginSuccess = createAction('[Auth] Login Success',props<{data:AuthData}>())
export const loginFailure = createAction('[Auth] Login Failure', props<{errorMessage:loginError}>())

export const logout = createAction('[Auth] Logout')
export const logoutSuccess = createAction('[Auth] Logout Success')