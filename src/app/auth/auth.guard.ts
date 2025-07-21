import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { map } from 'rxjs';

export const authGuard: CanMatchFn = (route, segments) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  return tokenService.userToken.pipe(
    map((token: string | null) => {
      if (token) {
        return true;
      } else {
        return router.parseUrl('');
      }
    })
  );
};
