import { Routes } from '@angular/router';

import { ClockInComponent } from './pages/clock-in/clock-in.component';
import { HomeComponent } from './pages/home/home.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'usuarios', component: UserComponent },

  { path: 'adicionar-usuarios', component: UserRegisterComponent },

  { path: 'editar-usuario', component: UserRegisterComponent },

  { path: 'bater-ponto', component: ClockInComponent },

  { path: '**', redirectTo: 'home' }


];
