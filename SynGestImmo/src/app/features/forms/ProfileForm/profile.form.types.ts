import {FormControl, FormGroup} from '@angular/forms';

export interface ProfileFormControls {
  id: FormControl<string>;
  entityId: FormControl<string>;
  entityType: FormControl<string>;
  displayName: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  lastName: FormControl<string>;
  firstName: FormControl<string>;
  birthDate: FormControl<string>;
  nationalId: FormControl<string>;
}
export type ProfileFormCtrls = FormGroup<ProfileFormControls>
