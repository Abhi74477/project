import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from  '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { HygieneComponent } from './pages/hygiene/hygiene.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

import { TagsComponent } from './tags/tags.component';
import {CartPageComponent} from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RatingModule} from 'ng-starrating';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CustomerComponent } from './customer/customer.component';
import { CustomerNavbarComponent } from './customer/customer-navbar/customer-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BookingsComponent,
    HygieneComponent,
    LoginComponent,
    SignupComponent,
    MenuPageComponent,
    BodyComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodPageComponent,
    CustomerComponent,
    CustomerNavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    NgbModule,
    RatingModule,
    MDBBootstrapModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
