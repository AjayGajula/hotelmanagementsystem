import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  RegisterComponent,
  LoginComponent,
  RestaurantComponent,
  ServicesComponent,
];
