// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private loggedIn = false;  // To track if the user is logged in

  constructor() {}

  /**
   * Mock login function.
   * In real-world apps, you'd make an API call to the back end to authenticate the user.
   */
  login(username: string, password: string): boolean {
    // Check username and password (you'd normally make a back-end API request here)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'mock-token');  // Set a mock token in local storage
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  /**
   * Logout function to clear the session and token
   */
  logout(): void {
    localStorage.removeItem('token');  // Remove the token from local storage
    this.loggedIn = false;
  }

  /**
   * Check if the user is logged in by verifying if a token exists in local storage
   */
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  displayName(): string {
    if (this.isLoggedIn()) {
      return 'admin'; // User is logged in
    } else {
      return 'Guest'; // User is not logged in
    }
  }
}
