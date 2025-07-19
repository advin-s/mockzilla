import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, logout } from './auth.actions';
import { LoginState } from '../../types';

export const initialLoginState: LoginState = {
  isLoading: false,
  data:null,
  errorMessage:null
};

export const loginReducers = createReducer(
  initialLoginState,
  on(login, (state) => ({ ...state, isLoading: true })),
  on(loginSuccess,(state,action) => ({...state, data:action.data, isLoading:false})),
  on(loginFailure,(state,{errorMessage}) => ({...state, errorMessage, isLoading:false})),

  on(logout, (state) => ({...state,data:null})),
);
