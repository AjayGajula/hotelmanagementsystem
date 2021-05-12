import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private service: RegistrationService, private router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this.service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response recevied');
        this.msg = 'Registration Successful';
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = error.error;
      }
    );
  }
}
