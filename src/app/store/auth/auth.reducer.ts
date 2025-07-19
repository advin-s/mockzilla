import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, logout, logoutSuccess } from './auth.actions';
import { LoginState } from '../../types';

export const initialLoginState: LoginState = {
  isLoading: false,
};

export const loginReducers = createReducer(
  initialLoginState,
  on(login, (state) => ({ ...state, isLoading: true })),
  on(loginSuccess,(state,action) => ({...state, data:action.data, isLoading:false})),
  on(loginFailure,(state,action) => ({...state, errorMessage:action, isLoading:false})),

  on(logout, (state) => ({...state,data:null})),
);
