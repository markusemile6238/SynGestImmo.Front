import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../core/auth/services/AuthService/auth.service';

export const passwordGuard : CanActivateFn = () =>{

  const auth = inject(AuthService);
  const router=inject(Router);

  if(auth.mustChangePassword()){
    router.navigateByUrl('/change-password');
    return false;
  }

  return true;


}
