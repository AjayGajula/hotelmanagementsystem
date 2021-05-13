import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharverificationComponent } from './components/aadharverification/aadharverification.component';
import { BookinghistoryComponent } from './components/bookinghistory/bookinghistory.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { OtpverificationComponent } from './components/otpverification/otpverification.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'bookinghistory', component: BookinghistoryComponent },
  { path: 'aadharverification', component: AadharverificationComponent },
  { path: 'otpverification', component: OtpverificationComponent },
  { path: '', component: HomeComponent },
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
