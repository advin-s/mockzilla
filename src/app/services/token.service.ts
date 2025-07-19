import { Injectable } from '@angular/core';
import { Token } from '../types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public userToken = new BehaviorSubject<string | null>(null);

  constructor() {}

  setToken(token: Token) {
    const { accessToken } = token;
    this.userToken.next(accessToken);
    localStorage.setItem(accessToken, 'accessToken');
  }

  fetchToken() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.userToken.next(token);
    }
  }

  clearToken() {
    localStorage.removeItem('accessToken');
  }
}
