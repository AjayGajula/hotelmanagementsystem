import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { BookinghistoryComponent } from './components/bookinghistory/bookinghistory.component';
import { HomeComponent } from './components/home/home.component';
import { AadharverificationComponent } from './components/aadharverification/aadharverification.component';
import { OtpverificationComponent } from './components/otpverification/otpverification.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginsuccessComponent,
    ResetpasswordComponent,
    BookinghistoryComponent,
    HomeComponent,
    AadharverificationComponent,
    OtpverificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
