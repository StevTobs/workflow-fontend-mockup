import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../models/item';
import { HomeModule } from '../home/home.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService,
              private authService: AuthService
              ){}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  deleteItem(id: string): void {
    this.itemService.deleteItem(id);
    // this.items = this.itemService.getItems();
  }

  isLogin(): boolean {
    return this.authService.isLoggedIn();
  }

  approveItem(id: string): void {
    // this.itemService.approveItem(id);
    // this.items = this.itemService.getItems();
  }


}
