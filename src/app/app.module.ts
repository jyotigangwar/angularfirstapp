import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { CartComponent } from './cart/cart.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { LoginComponent } from './login/login.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './highlight.directive';
import { MypipePipe } from './mypipe.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from "ngx-ui-loader";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CakeComponent,
    CartitemComponent,
    CartComponent,
    AddcakeComponent,
    LoginComponent,
    CakelistComponent,
    RegisterComponent,
    CakedetailsComponent,
    HomeComponent,
    ForgotComponent,
    SearchComponent,
    FooterComponent,
    HighlightDirective,
    MypipePipe,
    CheckoutComponent,
    Navbar1Component,
    SummaryComponent,
    PaymentComponent,
    AddressComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
