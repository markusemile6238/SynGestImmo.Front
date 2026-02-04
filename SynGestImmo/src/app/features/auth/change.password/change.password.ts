import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from '../../../core/auth/services/AuthService/auth.service';
import {Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {PasswordMatchValidator} from '../validators/passwordMatchValidator';

@Component({
  selector: 'app-change.password',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './change.password.html',
  styleUrl: './change.password.scss',
})
export class ChangePassword {

  form!: FormGroup;
  hideNp = true;
  hideCnp = true;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router

  ){

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]],
    },{
      validators : PasswordMatchValidator
    })

  }

  submit(){

    if(this.form.invalid) return;
    const {email,currentPassword,newPassword,confirmPassword} = this.form.value;


  }

}
