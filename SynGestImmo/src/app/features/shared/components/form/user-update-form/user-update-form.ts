import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserModel} from '../../../../../core/models/user.model';

@Component({
  selector: 'app-user-update-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-update-form.html',
  styleUrl: './user-update-form.scss',
})
export class UserUpdateForm {



  @Input('userProfile') user!: UserModel;

  form! : FormGroup;

 ngOnInit():void {
   this.form = new FormGroup(
     {
       id: new FormControl(this.user.id, Validators.required),
       username: new FormControl(this.user.username, [Validators.required]),
       email: new FormControl(this.user.email, [Validators.required,Validators.email]),

   })
 }


}
