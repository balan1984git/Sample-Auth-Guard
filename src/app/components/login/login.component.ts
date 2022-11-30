import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  loginErrorMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    const userDetails = {
      userName: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    if (userDetails.userName == '' || userDetails.password == '') {
      this.loginErrorMessage = '';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users'));
    users.find((data) => {
      if (
        data.userName.toLowerCase() == userDetails.userName.toLowerCase() &&
        data.password.toLowerCase() == userDetails.password.toLowerCase()
      ) {
        this.router.navigate(['upload']);
      } else {
        this.loginErrorMessage = 'Invalid login credentials';
      }
    });
  }
}
