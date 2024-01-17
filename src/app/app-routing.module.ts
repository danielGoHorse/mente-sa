import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'medical-contact',
    loadChildren: () => import('./pages/medical-contact/medical-contact.module').then( m => m.MedicalContactPageModule)
  },
  {
    path: 'medical-register',
    loadChildren: () => import('./pages/medical-contact/medical-register/medical-register.module').then( m => m.MedicalRegisterPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./pages/tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'main-contact',
    loadChildren: () => import('./pages/main-contact/main-contact.module').then( m => m.MainContactPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'mood',
    loadChildren: () => import('./pages/mood/mood.module').then( m => m.MoodPageModule)
  },
  {
    path: 'lessons',
    loadChildren: () => import('./pages/lessons/lessons.module').then( m => m.LessonsPageModule)
  },
  {
    path: 'relaxation-center',
    loadChildren: () => import('./pages/relaxation-center/relaxation-center.module').then( m => m.RelaxationCenterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
