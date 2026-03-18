import {Component, Input} from '@angular/core';
import {UserProfile} from '../../Models/UserProfile';
import {ProfilService} from '../../services/profil-service';
import {SnackBarService} from '../../../../core/services/snack-bar-service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ErrorFormModel} from '../form/models/errorFormModel';
import {selectValueValidator} from '../form/validators/selectValueValidator';
import {FormInput} from '../form/input/formInput';
import {disabled} from '@angular/forms/signals';
import {DisplayErrors} from '../form/display-errors/display-errors';


@Component({
  selector: 'app-profile',
  imports: [AsyncPipe, FormInput, FormsModule, ReactiveFormsModule, DisplayErrors],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  userProfile!: Observable<UserProfile>;
  private _userEntityId!: string;
  displayEmptyForm: boolean = false;

  form!: FormGroup<{
    id: FormControl<string>;
    entityType: FormControl<string>;
    displayName: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    lastname: FormControl<string>;
    firstname: FormControl<string>;
    birthDate: FormControl<string>;
    nationalId: FormControl<string>;
  }>;
  createNewProfileErrorMessage: ErrorFormModel[] = [
    {name: 'id', type: 'required', message: 'Id name is required'},
    {name: 'entityType', type: 'noValueSelected', message: 'Entity Type is required'},
    {name: 'displayName', type: 'required', message: 'Display name is required'},
    {name: 'email', type: 'required', message: 'Email is required'},
    {name: 'email', type: 'email', message: 'Email is invalid'},
    {name: 'phone', type: 'required', message: 'Phone is required'},
    {name: 'lastname', type: 'required', message: 'Firstname is required'},
    {name: 'firstname', type: 'required', message: 'Lastname is required'},
    {name: 'birthDate', type: 'required', message: 'Birthday date is required'},
    {name: 'nationalId', type: 'required', message: 'National Id is required'},
  ]




  @Input()
  set userEntityId(value: string) {
    this._userEntityId = value;
    this.GetProfileOfUser(value);
  }

  get userEntityId(): string {
    return this._userEntityId;
  }

  constructor(
    private profileService$: ProfilService,
    private snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl({value:this.userEntityId,disabled:false},{nonNullable:true}),
      entityType: new FormControl('',{nonNullable: true,validators:[selectValueValidator]}),
      displayName: new FormControl('',{nonNullable: true,validators:[Validators.required]}),
      email: new FormControl('',{nonNullable: true,validators:[Validators.email,Validators.required]}),
      phone: new FormControl('',{nonNullable: true,validators:[Validators.required]}),
      lastname: new FormControl('',{nonNullable: true,validators:[Validators.required]}),
      firstname: new FormControl('',{nonNullable: true,validators:[Validators.required]}),
      birthDate: new FormControl('',{nonNullable: true,validators:[Validators.required]}),
      nationalId: new FormControl('',{nonNullable: true,validators:[Validators.required]}),
    });

  }


  GetProfileOfUser(entityId: string) {
    this.userProfile = this.profileService$.getUserProfile(entityId);
  }

  createProfile(){

  }

}
