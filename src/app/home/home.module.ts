import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule 
    // LoginComponent
  ],
  exports: [HomeComponent] // Export HomeComponent
})
export class HomeModule {}
