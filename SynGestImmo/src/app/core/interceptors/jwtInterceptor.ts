import {HttpInterceptor, HttpInterceptorFn} from '@angular/common/http';
import {TokenService} from '../auth/services/tokenService/token.service';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {catchError, switchMap, throwError} from 'rxjs';
import {AuthService} from '../auth/services/AuthService/auth.service';

let isRefreshing = false;

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.getAccessToken();

  const authReq = token ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }) : req;

  return next(authReq).pipe(
    catchError(err => {
      // if not authenticated
      if (err.status === 401 && !isRefreshing) {
        isRefreshing = true;

        return auth.refresh().pipe(
          switchMap(() => {
            isRefreshing = false;

            const newToken = tokenService.getAccessToken();
            if (!newToken) {
              router.navigateByUrl('/login');
              return throwError(() => err);
            }
            return next(
              req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`
                }
              })
            );
          }),
          catchError(refreshErr => {
              isRefreshing = false;
              tokenService.clear();
              router.navigateByUrl('/login');
              return throwError(() => refreshErr);
            })
          );
      }

      // if not authorized
      if (err.status === 403) {
        router.navigateByUrl('/forbidden');
      }
      // return error
      return throwError(() => err);
    })
  );


}
