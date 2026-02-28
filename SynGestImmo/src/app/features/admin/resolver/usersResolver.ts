import {ResolveFn} from '@angular/router';
import {inject, Inject} from '@angular/core';
import {UserService} from '../../../core/services/user-service';
import {UserModel} from '../../../core/models/user.model';

export const usersResolver: ResolveFn<UserModel[]> = ()=>{
  return inject(UserService).getAlluser();

}
