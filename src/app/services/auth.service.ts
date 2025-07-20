import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginData } from '../types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from '../interfaces';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  serverAddress = environment.serverAddress;
  constructor(private http: HttpClient,private tokenService:TokenService,private router:Router) {}

  onLogin(loginData: LoginData): Observable<AuthData> {
    return this.http.post<AuthData>(
      `${this.serverAddress}/auth/login`,
      loginData
    );
  }

  autoLogin(){
    if(!this.tokenService.checkTokenExpiry()){
      this.router.navigate(['dashboard'])
    }
  }

  onLogout(){
    this.tokenService.clearToken()
    this.router.navigate([''])
  }
}
