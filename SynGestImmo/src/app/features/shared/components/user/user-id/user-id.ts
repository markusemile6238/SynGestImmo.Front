import {Component, Input, input} from '@angular/core';
import {UserModel} from '../../../../../core/models/user.model';
import {UserUtilityService} from '../../../services/user-utility-service';
import {DatePipe, NgStyle} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {SnackBarService} from '../../../../../core/services/snack-bar-service';

@Component({
  selector: 'app-user-id',
  imports: [
    NgStyle,
    DatePipe,
    ReactiveFormsModule  ],
  templateUrl: './user-id.html',
  styleUrl: './user-id.scss',
})
export class UserId {

  modalIsOpen:boolean = true;
  badgeInitial:string = '';
  updateMode:boolean = false;

  @Input() user!: UserModel;

  form! : FormGroup;

  constructor(
    private userTools : UserUtilityService,
    private snackBar: SnackBarService,
  ){}

  ngOnInit() {
   this.badgeInitial = this.userTools.getInitial(this.user.username);

   this.form = new FormGroup({
     'username': new FormControl(this.user.username, {validators:[Validators.required]}),
     'email': new FormControl(this.user.email, {validators:[Validators.required,Validators.email]}),
     'isActive': new FormControl(this.user.isActive, {validators:[Validators.required]}),
   })

  }

  updateUser(){
    if(this.form.valid){
      this.user.username=this.form.controls['username'].value;
      this.user.email=this.form.controls['email'].value;
      this.user.isActive=this.form.controls['isActive'].value === true;
    }
    // envoyer la mise ajour vers le backend pour confirmation du gestionnaire avant mise a jour de la db
    this.snackBar.success("Successful update and sent for confirmation by the manager")
    this.updateMode=false;
  }


}
