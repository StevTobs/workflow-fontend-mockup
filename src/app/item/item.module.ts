import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemFormComponent } from '../item-form/item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../home/home.component';
import { ApproveComponent } from '../approve/approve.component';

@NgModule({
  declarations: [
    HomeComponent,
    ItemListComponent, 
    ItemFormComponent, ApproveComponent ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule, 
    HomeModule],
})
export class ItemModule {}
