import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageOrdersComponent } from './orders/manage-orders/manage-orders.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PartsCatalogComponent } from './parts/parts-catalog/parts-catalog.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"manageOrders", component:ManageOrdersComponent, canActivate:[AuthGuard]},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard]},
  {path:"parts", component:PartsCatalogComponent, canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"", redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
