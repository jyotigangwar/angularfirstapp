import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { RegisterComponent } from './register/register.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CartComponent } from './cart/cart.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { SummaryComponent } from './summary/summary.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'addcake', component: AddcakeComponent },
  { path: 'cakelist', component: CakelistComponent },
  { path: 'cart/:cakeid', component: CartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cartitem', component: CartitemComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'checkout', children: [
      { path: "", redirectTo: "summary", pathMatch: 'full' },
      { path: 'summary', component: SummaryComponent },
      { path: 'address', component: AddressComponent },
      { path: 'payment', component: PaymentComponent },
    ]
    , component: CheckoutComponent
  },
  { path: 'cartcheckout', loadChildren: () => import('./cartcheckout/cartcheckout.module').then(m => m.CartcheckoutModule) },

  { path: 'cake/:cakeid', component: CakedetailsComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
