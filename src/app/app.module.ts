import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageOrdersComponent } from './orders/manage-orders/manage-orders.component';
import { PanelBoxComponent } from './panel/panel-box/panel-box.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PartsCatalogComponent } from './parts/parts-catalog/parts-catalog.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ManageOrdersPipe } from './orders/manage-orders.pipe';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    ManageOrdersComponent,
    PanelBoxComponent,
    NavbarComponent,
    DashboardComponent,
    PartsCatalogComponent,
    LoginComponent,
    RegisterComponent,
    ManageOrdersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
