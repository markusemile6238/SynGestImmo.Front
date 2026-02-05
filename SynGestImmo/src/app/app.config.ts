import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {jwtInterceptor} from './core/interceptors/jwtInterceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    MatSnackBarModule,
    provideHttpClient(
      withInterceptors([
        jwtInterceptor
      ])
    ),
  ]
};
