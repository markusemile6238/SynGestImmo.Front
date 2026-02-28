import { Component } from '@angular/core';
import {UserModel} from '../../../core/models/user.model';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatTableModule, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  isModalOpen = false;

  displayedColumns:string[] = ['Id','Username','Email','UserRef','Entity Id', 'Role name', 'Create at','Update at','Actions'];
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
