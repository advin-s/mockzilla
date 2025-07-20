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
    localStorage.setItem('accessToken', accessToken);
    this.setTokenExpiry();
  }

  fetchToken() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.userToken.next(token);
    }
  }

  clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenExpiry');
  }

  setTokenExpiry() {
    const currentTime = new Date().getTime();
    const oneHourMs = 60 * 60 * 1000;
    const tokenExpiry = currentTime + oneHourMs;
    localStorage.setItem('tokenExpiry', JSON.stringify(tokenExpiry));
  }

  checkTokenExpiry(): boolean {
    const expiry = +JSON.stringify(localStorage.getItem('tokenExpiry'));
    if(!expiry) return true
    const currentTime = new Date().getTime();
    return currentTime > expiry;
  }
}
