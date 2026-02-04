import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../core/auth/services/AuthService/auth.service';

export const adminGuard : CanActivateFn = ()=>{

  const auth = inject(AuthService);
  const router=inject(Router);

  if(!auth.hasRole('SU')){
    router.navigateByUrl('/forbidden');
    return false;
  }
  return true;

}
