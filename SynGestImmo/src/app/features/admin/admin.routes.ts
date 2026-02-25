import {Routes} from '@angular/router';
import {userResolver} from './resolver/userResolver';

export const ADMIN_ROUTES: Routes=[
  {
    path:'',
    loadComponent:()=>import('./dashboard/admin-dashboard/admin-dashboard')
      .then(m => m.AdminDashboard)

  },
  {
    path:'users-managment',
    loadComponent:()=>import('./user-list/user-list')
      .then(m => m.UserList),
    resolve:{users: userResolver}
  }
];

