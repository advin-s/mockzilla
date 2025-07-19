import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginData } from '../types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  serverAddress = environment.serverAddress;
  constructor(private http: HttpClient) {}

  onLogin(loginData: LoginData): Observable<AuthData> {
    return this.http.post<AuthData>(
      `${this.serverAddress}/auth/login`,
      loginData
    );
  }
}
