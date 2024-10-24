import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ItemService } from '../item/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  items: Item[] = [];
  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private router: Router // Import Router for navigation
  ) {}

  ngOnInit(): void { // Implement OnInit lifecycle hook
    this.checkLogin(); // Call the login check method
    this.items = this.itemService.getItems();
  }

  approveItem(item: Item): void {

    this.itemService.approveItem(item.id);

    // console.log("Approve item: ");
    // console.log(item.id);
    // console.log(item.status);
    this.router.navigate(['/approve']);
  }

  rejectItem(item: Item): void {
    this.itemService.rejectItem(item.id);
    // console.log("Reject item: ");
    // console.log(item.id);
    // console.log(item.status);
    this.router.navigate(['/approve']);
  }

  isLogin(): boolean {
    return this.authService.isLoggedIn();
  }

  checkLogin(): void {
    const isLoggedIn = this.isLogin(); // Call the isLoggedIn method
    if (!isLoggedIn) {
      // this.router.navigate(['/']); // Navigate to login if not logged in
    }
  }


  navigateToLogin() {
    this.router.navigate(['/']);
  }
}
