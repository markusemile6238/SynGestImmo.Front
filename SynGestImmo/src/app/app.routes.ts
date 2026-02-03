import { Routes } from '@angular/router';
import {MainLayout} from './core/layout/main-layout/main-layout';
import {Component} from '@angular/core';

export const routes: Routes = [
  {path:'login',loadComponent:()=>import('./features/auth/login/login').then(m=>m.Login)},
  {
    path: '',
    component: MainLayout,
    children:
      [
        {
          path: 'dashboard',
          loadComponent: () => import('./features/user/dashboard/user-dashboard').then(m => m.UserDashboard)
        },
        {
          path: 'admin',
          loadComponent: () => import('./features/admin/dashboard/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
        },
      ]
  },
  {path:'**',redirectTo:'login',pathMatch:'full'},

]
