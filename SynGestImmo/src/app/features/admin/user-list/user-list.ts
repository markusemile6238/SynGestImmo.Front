import { Component } from '@angular/core';
import {UserModel} from '../../../core/models/user.model';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  displayedColumns:string[] = ['Id','Username','Email','UserRef','Entity Id', 'Role name'];
 // displayedColumns:string[] = ['Id','Username','Email', 'UserRef','Email C','Entity Id' ,'Role Id','Role Name','Create at', 'Update at']
  datasource: UserModel[] = [];
  error! : string;
  constructor(
    private route: ActivatedRoute,
  ){
  }

  ngOnInit():void {
    this.datasource = this.route.snapshot.data['users'];
  }








}
