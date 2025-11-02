import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClockInComponent } from './pages/clock-in/clock-in.component';
import { UserComponent } from './pages/user/user.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'usuarios', component: UserComponent },

  { path: 'adicionar-usuarios', component: UserRegisterComponent },

  { path: 'bater-ponto', component: ClockInComponent },

  { path: '**', redirectTo: 'home' }


];
