import {AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms'

export const PasswordMatchValidator : ValidatorFn = (control:AbstractControl):ValidationErrors | null =>{

  const newPassword = control.get('newPassword') ;
  const confirmPassword = control.get('confirmPassword') ;

  return newPassword && confirmPassword && newPassword.value !== confirmPassword.value ? {passwordMismatch: true} : null;
}
