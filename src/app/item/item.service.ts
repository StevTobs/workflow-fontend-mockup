import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [];

  constructor() {
    let savedItems = localStorage.getItem('items');
    this.items = savedItems ? JSON.parse(savedItems) : [];
  }

  // GET all items
  getItems(): Item[] {
    return this.items;
  }

  // GET a single item by ID
  getItem(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  // CREATE a new item
  addItem(item: Item): void {
    // item.id = (this.items.length + 1).toString();
    item.id = Date.now().toString();
    item.status = 'PENDING';
    this.items.push(item);

    // Save the updated item list to localStorage
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  // UPDATE an existing item by ID
  updateItem(id: string, updatedItem: Item): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = updatedItem;
      return true; // Successful update
    }
    return false; // Item not found
  }

  // DELETE an item by ID
  deleteItem(id: string): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);

      // Save the updated item list to localStorage
      localStorage.setItem('items', JSON.stringify(this.items));
      return true; // Successful deletion
    }
    return false; // Item not found
  }

  approveItem(id: string): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index].status = 'APPROVED';
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
  rejectItem(id: string): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index].status = 'REJECTED';
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
}
