import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

/**
 *Validator that checks if `password` and `confirmPassword` fields match
 *
 * ⚠️ Important:
 * This validator must be applied to a **FormGroup** containing
 * two controls named `password` and `confirmPassword`
 *
 * @param control
 * @return mismatchPassword boolean
 *
 */
export const confirmPasswordControlValidator:ValidatorFn =
  (control : AbstractControl): ValidationErrors | null => {

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({mismatchPassword: true});
    } else {
      if(confirmPassword.hasError('mismatchPassword')) {
        const errors = { ...confirmPassword.errors };
        delete errors['mismatchPassword'];
        if(Object.keys(errors).length ===0) {
          confirmPassword.setErrors(null);
        }else {
          confirmPassword.setErrors(errors);
        }
      }
    }
    return null;
  }

