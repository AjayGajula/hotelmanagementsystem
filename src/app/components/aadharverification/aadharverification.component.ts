import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadharverification',
  templateUrl: './aadharverification.component.html',
  styleUrls: ['./aadharverification.component.css']
})
export class AadharverificationComponent implements OnInit {
 user = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
