import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  loginFailed = false; // To track login failure
  isLoggedIn = false;  // To track if the user is logged in


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}


  isLogin(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  clearAlert(): void {
    this.loginFailed = false;
    this.userForm.reset();

  }


  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    this.isLoggedIn = this.isLogin();  // Call isLogin to set isLoggedIn
    };


  onSubmit(): void {
    if (this.userForm.valid) {
      const username = this.userForm.get('username')?.value;
      const password = this.userForm.get('password')?.value;

      // Call the AuthService's login method
      const isAuthenticated = this.authService.login(username, password);

      if (isAuthenticated) {
        // Navigate to the dashboard or another protected route
        // this.router.navigate(['/dashboard']);

        this.router.navigate(['/list']);
        // console.log('Login successfully');

      } else {
        // Handle login failure
        this.loginFailed = true;
        this.isLoggedIn = false;
        this.router.navigate(['/']);
        console.log('Login failed');
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
