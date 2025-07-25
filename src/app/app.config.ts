import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr'

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { loginReducers } from './store/auth/auth.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthEffects } from './store/auth/auth.effects';
import { authInterceptor } from './auth/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProductEffects } from './store/products/product.effects';
import { productReducer } from './store/products/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideStore({ login: loginReducers, products:productReducer }),
    provideEffects(AuthEffects, ProductEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideToastr(
      {
        positionClass:'toast-bottom-right',
        easeTime:700,
        preventDuplicates:true
      }
    ),
    provideAnimations()
  ],
};
