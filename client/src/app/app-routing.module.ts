import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from '../app/services/authGuard/auth-guard.service';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', component: RootComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
