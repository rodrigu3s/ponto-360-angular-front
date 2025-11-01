import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { ClockInComponent } from './pages/clock-in/clock-in.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'cadastro-usuarios', component: UserRegisterComponent },

  { path: 'bater-ponto', component: ClockInComponent },

  { path: '**', redirectTo: 'home' }


];
