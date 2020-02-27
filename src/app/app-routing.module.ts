import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlashPageComponent } from './flash-page/flash-page.component';
import { RegisterComponent } from './register/register.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flash',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'flash',
    component: FlashPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
   {
    path: 'addPost',
    component: AddPostComponent
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
