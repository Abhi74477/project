import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';

import { MenuPageComponent } from './menu-page/menu-page.component';

import { BookingsComponent } from './pages/bookings/bookings.component';
import { HomeComponent } from './pages/home/home.component';
import { HygieneComponent } from './pages/hygiene/hygiene.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'customer',component:CustomerComponent},
  {path:'booking',component:BookingsComponent},
  {path:'hygiene',component:HygieneComponent},
  {path:'menu-page',component:MenuPageComponent},
  {path:'search/:searchItem', component:MenuPageComponent},
  {path:'tag/:tag', component:MenuPageComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
