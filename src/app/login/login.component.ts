import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login, logout } from '../store/auth/auth.actions';
import { AuthService } from '../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { distinctUntilChanged, Observable } from 'rxjs';
import { isLogginIn, loginError } from '../store/auth/auth.selectors';
import { AppStateInterface } from '../types';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading$!: Observable<boolean>;
  loginError!: any | null;

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    this.isLoading$ = this.store$.pipe(select(isLogginIn));
    
    this.store$.pipe(select(loginError)).subscribe((res: any) => {
      if (res) {
        const { message } = res;
        this.loginError = message;
      }
    });

    this.loginForm.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      if (this.loginError) {
        this.loginError = null;
      }
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.store$.dispatch(login({ loginData: this.loginForm.value }));
  }
}
