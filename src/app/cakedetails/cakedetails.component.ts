import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../cake.service';
import { CartService } from '../cart.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cakeid: any
  cakes: any = {}
  cakeObj: any = {}
  constructor(private route: ActivatedRoute,
    private cakeservice: CakeService,
    private cartservice: CartService,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) {
    this.cakeid = this.route.snapshot.params["cakeid"]
    //apicall se data lana hai

    var url = "https://apifromashu.herokuapp.com/api/cake/" + this.cakeid;
    this.cakeservice.getCakeDetails(url).subscribe((response: any) => {
      console.log("Cake details cakes list", response)
      console.log('all cakes are coming here', response.data)
      this.cakes = response.data
      console.log(this.cakes)
      this.ngxService.stopLoader("loader-01");

    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }

  addCakeToCart(cakeid: any) {
    this.ngxService.startLoader("loader-01");

    this.cakeid = cakeid
    this.cakeObj = {
      cakeid: this.cakes.cakeid,
      name: this.cakes.name,
      price: this.cakes.price,
      weight: this.cakes.weight
    }
    console.log("cakeObject passed", cakeid, this.cakeObj)
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Cakeid", this.cakeid)
    console.log("Myheaders", myHeaders)
    this.cartservice.addCakeToCartApi(this.cakeObj, {
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("Cake details cakes list", response)
      console.log('all cakes are coming here', response.data)
      this.cakes = response.data
      console.log(this.cakes)
      this.ngxService.stopLoader("loader-01");

      this.router.navigate(["cart"])
    }, (error) => {
      console.log("error from all cakes api", error)
    })

  }

  ngOnInit(): void {
    this.ngxService.startLoader("loader-01");
  }

}
