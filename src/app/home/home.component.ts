import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
// import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loginUser: string = ""; // Declare the variable without 'let'

  constructor(
    private authService: AuthService,
    private router: Router
    // private itemService: ItemService // Inject ItemService for displayName()
  ) {}

  ngOnInit(): void {
    // Use itemService instead of ItemService
    this.loginUser = this.authService.displayName();
  }

  isLogin(): boolean {
    return this.authService.isLoggedIn(); // Check if user is logged in
  }

  logout(): void {
    this.authService.logout(); // Call the logout function in AuthService
    this.router.navigate(['/login']); // Redirect user to login page
  }
}
