import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'Account',
    loadChildren: () => import('./Components/Account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./Components/Dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'Details',
    loadChildren: () => import('./Components/Details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('./Components/Authentification/Login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'Signup',
    loadChildren: () => import('./Components/Authentification/Signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
