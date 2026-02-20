import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/auth/services/AuthService/auth.service';
import { Router } from '@angular/router';
import {Topbar} from '../../../core/layout/shared/topbar/topbar';


@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    Topbar,

  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  form!: FormGroup;
  hideP =true;




  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

 submit():void{
    if(this.form.invalid) return;

    const {email, password} = this.form.value;

    this.auth.login({email, password}).subscribe({
      next:(data)=>{

        // premiere source
        if(data.mustChangePassword){
          this.router.navigateByUrl('/change-password');
          return;
        }
        const context = this.auth.getUserContext();

        if(!context) return;

        if(context.role === 'SU'){
          this.router.navigateByUrl('/admin');
        }else{
          this.router.navigateByUrl('/dashboard');
        }

      },
      error:()=>{
        alert('Login incorrect');
      }
    })
  }





}
