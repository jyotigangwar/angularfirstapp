import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';
import { CartcheckoutComponent } from './cartcheckout.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const checkoutroutes: Routes = [
  {
    path: '', component: CartcheckoutComponent, children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'address', component: AddressComponent },
      { path: 'payment', component: AddressComponent },
    ]
  },
]

@NgModule({
  declarations: [
    AddressComponent,
    PaymentComponent,
    SummaryComponent,
    CartcheckoutComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(checkoutroutes), FormsModule
  ]
})
export class CartcheckoutModule { }
