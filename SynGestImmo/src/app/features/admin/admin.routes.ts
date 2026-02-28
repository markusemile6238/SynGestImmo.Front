import {Routes} from '@angular/router';
import {userResolver} from './resolver/userResolver';
import {usersResolver} from './resolver/usersResolver';

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
    resolve:{users: usersResolver}
  },
  {
    path:'user-detail/:id',
    loadComponent:()=>import('../shared/components/user/detail/detail')
      .then(m => m.Detail),
    resolve:{user: userResolver}
  },
];

