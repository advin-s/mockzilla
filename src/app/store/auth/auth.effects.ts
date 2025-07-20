import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { map, mergeMap, catchError, of, take, tap } from 'rxjs';
import { AuthData } from '../../interfaces';
import { TokenService } from '../../services/token.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private tokenService = inject(TokenService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.authService.onLogin(loginData).pipe(
          map((data: AuthData) => loginSuccess({ data })),
          catchError(({ error }) => of(loginFailure({ errorMessage: error })))
        )
      )
    )
  );

  storeToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(({ data }) => {
          const { accessToken } = data;
          this.tokenService.setToken({ accessToken });
        })
      ),
    { dispatch: false }
  );
}
