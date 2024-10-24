import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// import { HomeModule } from './home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeModule } from './home/home.module';


import { LoginComponent } from './login/login.component';
import { ApproveComponent } from './approve/approve.component';
// import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,// Declare your component here
    ItemListComponent, // Declare your component here
    LoginComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,// <-- Add ReactiveFormsModule here
    HomeModule
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
