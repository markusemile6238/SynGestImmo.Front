import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const selectValueValidator:ValidatorFn =
  (control : AbstractControl): ValidationErrors | null => {

    const selectedValue:string = control.value;


    return (selectedValue != null && selectedValue != "null") ? null : { noValueSelected : true}
  }
