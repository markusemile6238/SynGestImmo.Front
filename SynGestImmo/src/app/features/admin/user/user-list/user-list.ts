import { Component } from '@angular/core';
import {AddUserBody, UserModel} from '../../../../core/models/user.model';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { MatTableModule} from '@angular/material/table';
import {AddUserForm} from '../add-user-form/add-user-form';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {UserService} from '../../../../core/services/user-service';
import {SnackBarService} from '../../../../core/services/snack-bar-service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatTableModule, RouterLink, AddUserForm,DragDropModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  isModalOpen = false;

  displayedColumns:string[] = ['Id','Username','Email','UserRef','Entity Id', 'Role name', 'Create at','Update at','Actions'];
  datasource: UserModel[] = [];
  error! : string;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private snackBar : SnackBarService
  ){
  }

  ngOnInit():void {
    this.datasource = this.route.snapshot.data['users'];
  }

  createNewUser(user: AddUserBody){
    alert(user.username);
    this.userService.createNewUser(user).subscribe({
      next: (response) => {
        if(response.isSuccess){
          this.snackBar.success('User created successfully.');
        }else{
          this.snackBar.error('User created failed');
          console.error(response);
        }
      },error: (error)=>{
        this.snackBar.error(error.message);
      }
    })
  }

}


