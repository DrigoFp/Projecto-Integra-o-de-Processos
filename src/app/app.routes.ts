import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Lista } from './treinos/lista/lista';
import { Criar } from './treinos/criar/criar';
import { Editar } from './treinos/editar/editar';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'lista', component: Lista, canActivate: [AuthGuard] },
  { path: 'criar', component: Criar, canActivate: [AuthGuard] },
  { path: 'treinos/editar/:id', component: Editar, canActivate: [AuthGuard] },

  {
    path: 'treinos/:id',
    loadComponent: () =>
      import('./treinos/detalhe/detalhe').then(m => m.DetalheTreinoComponent),
    canActivate: [AuthGuard]
  }
];