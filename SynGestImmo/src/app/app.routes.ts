import { Routes } from '@angular/router';
import {MainLayout} from './core/layout/main-layout/main-layout';
import {Component} from '@angular/core';
import {authGuard} from './features/guards/authGuard';
import {passwordGuard} from './features/guards/passwordGuard';
import {adminGuard} from './features/guards/admlnGuard';

export const routes: Routes = [
  {path:'login',loadComponent:()=>import('./features/auth/login/login').then(m=>m.Login)},
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
          loadComponent: () => import('./features/admin/dashboard/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
        },
      ]
  },
  {path:'**',redirectTo:'login',pathMatch:'full'},

]
