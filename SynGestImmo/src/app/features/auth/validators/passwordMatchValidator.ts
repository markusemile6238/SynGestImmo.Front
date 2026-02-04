import {AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms'
import {ValidationError} from '@angular/forms/signals';
export const PasswordMatchValidator : ValidatorFn = (control:AbstractControl):ValidationErrors | null =>{

  const newPassword = control.get('newPassword') ;
  const confirmNewPassword = control.get('confirmNewPassword') ;

  return newPassword && confirmNewPassword && newPassword.value !== confirmNewPassword.value ? {passwordMismatch: true} : null;
}
