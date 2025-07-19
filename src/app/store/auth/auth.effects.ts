import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { map, mergeMap, catchError, of } from 'rxjs';
import { AuthData } from '../../interfaces';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.authService.onLogin(loginData).pipe(
          map((data: AuthData) => loginSuccess({ data })),
          catchError(({error}) => of(loginFailure({ errorMessage: error })))
        )
      )
    )
  );
}
