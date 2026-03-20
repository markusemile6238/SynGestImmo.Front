import {Injectable} from '@angular/core';
import {ProfileFormCtrls} from './profile.form.types';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {selectValueValidator} from '../../shared/components/form/validators/selectValueValidator';

@Injectable({providedIn: 'root'})
export class ProfileForm {
  build(userEntityId: string): ProfileFormCtrls {
    return new FormGroup({
      id: new FormControl({value: userEntityId, disabled: true}, {nonNullable: true}),
      entityId: new FormControl({value: userEntityId, disabled: true}, {nonNullable: true}),
      entityType: new FormControl('-1', {nonNullable: true, validators: [selectValueValidator]}),
      displayName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      email: new FormControl('', {nonNullable: true, validators: [Validators.email, Validators.required]}),
      phone: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      lastName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      birthDate: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      nationalId: new FormControl('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  patch(form:ProfileFormCtrls, data: Partial<Record<keyof ProfileFormCtrls['controls'], any>>):void{
    form.patchValue({
      entityId: data.id,
      entityType: String(data.entityType),
      displayName: data.displayName,
      email: data.email,
      phone: data.phone,
      lastName: data.lastName,
      firstName: data.firstName,
      birthDate: data.birthDate ? new Date(data.birthDate).toISOString().split('T')[0] : '',
      nationalId: data.nationalId
    });
  }

}
