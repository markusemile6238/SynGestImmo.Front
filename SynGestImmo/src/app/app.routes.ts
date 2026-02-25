import { Routes } from '@angular/router';
import {MainLayout} from './core/layout/main-layout/main-layout';
import {authGuard} from './features/guards/authGuard';
import {passwordGuard} from './features/guards/passwordGuard';
import {adminGuard} from './features/guards/adminGuard';
import {guestGuard} from './features/guards/guest-guard';

export const routes: Routes = [
  {path:'login',loadComponent:()=>import('./features/auth/login/login').then(m=>m.Login),canActivate:[guestGuard]},
  {path:'change-password',loadComponent:()=>import('./features/auth/change.password/change.password').then(m=>m.ChangePassword)},
  {path:'forbidden',loadComponent:()=>import('./features/shared/forbidden/forbidden').then(m=>m.Forbidden)},
  {path:'unauthorized',loadComponent:()=>import('./features/shared/unauthorized/unauthorized').then(m=>m.Unauthorized)},
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard,passwordGuard],
    children:
      [
        {
          path: 'dashboard',
          loadComponent: () => import('./features/user/dashboard/user-dashboard').then(m => m.UserDashboard)
        },
        {
          path: 'admin',
          canActivate:[adminGuard],
          loadChildren: () => import('./features/admin/admin.routes').then(m=>m.ADMIN_ROUTES)
        },
      ]
  },
  {path:'**',redirectTo:'login',pathMatch:'full'},

]
