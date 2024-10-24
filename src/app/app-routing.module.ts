import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { LoginComponent } from './login/login.component';
import { ApproveComponent } from './approve/approve.component';

const routes: Routes = [
  {path:"list", component: ItemListComponent},
  {path:"create", component: ItemFormComponent},
  {path:"approve", component: ApproveComponent},

  {path:"", component: LoginComponent},
  // {path:"login", component: LoginComponent},
  {path:"edit/:id", component: ItemFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
