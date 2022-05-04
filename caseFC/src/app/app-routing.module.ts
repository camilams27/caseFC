import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { CreateComponent } from './components/create/create.component'

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
