import {ResolveFn} from '@angular/router';
import {inject, Inject} from '@angular/core';
import {UserService} from '../../../core/services/user-service';
import {UserModel} from '../../../core/models/user.model';

export const userResolver: ResolveFn<UserModel> = (route)=>{
  const id:string|null = route.paramMap.get('id');
  return inject(UserService).getUserById(id!);

}
