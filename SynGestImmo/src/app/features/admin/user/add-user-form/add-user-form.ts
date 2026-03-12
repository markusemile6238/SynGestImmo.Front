import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RoleModel} from '../../../../core/models/role.model';
import {RoleService} from '../../../../core/services/role-service';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';
import {ErrorFormModel} from '../../../shared/components/form/models/errorFormModel';
import {selectValueValidator} from '../../../shared/components/form/validators/selectValueValidator';
import {
  confirmPasswordControlValidator
} from '../../../shared/components/form/validators/confirmPasswordControlValidator';
import {FormInput} from '../../../shared/components/form/input/formInput';
import {Select} from '../../../shared/components/form/select/select';
import {DisplayErrors} from '../../../shared/components/form/display-errors/display-errors';
import {AddUserBody} from '../../../../core/models/user.model';

@Component({
  selector: 'app-add-user-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, FormInput, FormInput, Select, DisplayErrors],
  templateUrl: './add-user-form.html',
  styleUrl: './add-user-form.scss',
})
export class AddUserForm {

  constructor(
    private roleService: RoleService
  ){}

  errorMessages!: string[];
  isLoading:boolean = false;
  roles$! : Observable<RoleModel[]>;

  form!: FormGroup<{
    username: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
    roleId: FormControl<number | null>;
  }>;

  errorMessage:ErrorFormModel[]=[
    {name:'username',type:'required',message:'Username is required'},
    {name:'email',type:'required',message:'Email is required'},
    {name:'email',type:'email',message:'Email is invalid'},
    {name:'password',type:'required',message:'Password is required'},
    {name:'confirmPassword',type:'required',message:'Password confirmation is required'},
    {name:'confirmPassword',type:'mismatchPassword',message:'Password confirmation not match'},
    {name:'roleId',type:'noValueSelected',message:'Please choose a role'},
  ]

  @Output() newUser  = new EventEmitter<AddUserBody>();



   ngOnInit() {
    this.isLoading=true;
    this.roles$ = this.roleService.getAllRole();

     this.form = new FormGroup({
         username: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
         email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
         password: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
         confirmPassword: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
         roleId: new FormControl<number | null>(null, {
           nonNullable: true,
           validators: [Validators.required, selectValueValidator]
         }),
       }, {validators: [confirmPasswordControlValidator]}
     );
     this.form.valueChanges.subscribe(value=>{
       if(this.form.errors?.['mismatchPassword']){
         this.form.get('confirmPassword')?.invalid;
       }
     })

    this.isLoading=false;
  }

  sendForm(){
    if(this.form.valid) {
      const user: AddUserBody = {
        username : this.form.controls['username']!.value,
        email : this.form.controls['email']!.value,
        password : this.form.controls['password']!.value,
        roleId : Number(this.form.controls['roleId']!.value)
      };
      this.newUser.emit(user);
    }else
    {
      console.error("form not valid")

    }
  }

}
