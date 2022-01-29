import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../cake.service';
import { CartService } from '../cart.service';
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  flowerItems = "testflower string. data is coming"
  cartitemsarray1: any = []
  /*cartitemsarray1.push(name: "Lotus ",
  price: "89",
  quantity: "12",
  image: "assets/images/cake1.jpg");
  cartitemsarray1.push(name: "Pink Rose",
  price: "189",
  quantity: "12",
  image: "assets/images/cake2.jpeg",
  category: "bestseller");

  */
  cartitemsarray = [
    {
      name: "Lotus ",
      price: "89",
      quantity: "12",
      image: "assets/images/cake1.jpg"
    }, {
      name: "Pink Rose",
      price: "189",
      quantity: "12",
      image: "assets/images/cake2.jpeg",
      category: "bestseller"
    }, {
      name: "MarieGold",
      price: "89",
      quantity: "12",
      image: "assets/images/cake1.jpg",
      category: "bestseller"
    },
    {
      name: "Pink Rose",
      price: "89",
      quantity: "12",
      image: "assets/images/cake1.jpg"
    }

  ]
  cartItems: any = {
    name: "Lotus ",
    price: "89",
    quantity: "12",
    image: "assets/images/cake1.jpg"
  }
  cartItems1: any = {
    name: "Pink Rose",
    price: "189",
    quantity: "12",
    image: "assets/images/cake2.jpeg",
    category: "bestseller"
  }
  cartItems2: any = {
    name: "MarieGold",
    price: "89",
    quantity: "12",
    image: "assets/images/cake1.jpg",
    category: "bestseller"
  }
  cartItems3: any = {
    name: "Pink Rose",
    price: "89",
    quantity: "12",
    image: "assets/images/cake1.jpg"
  }

  cartItems4: any = {
    name: "Yellow rose",
    price: "89",
    quantity: "12",
    image: "assets/images/cake1.jpg",
    category: "bestseller"

  }
  cakeid: any
  cakes: any = {}
  cakeObj: any = {}
  cartItemsDb: any = {}
  cartMessage: any = ""
  sum: any = ""
  totalElements!: Number;
  // cartItemsDb.sum = function (items: any[], prop: string | number) {
  //   return items.reduce(function (a: any, b: { [x: string]: any; }) {
  //     return a + b[prop];
  //   }, 0);
  // };
  constructor(private route: ActivatedRoute,
    private cartservice: CartService,
    private ngxService: NgxUiLoaderService) {
    this.ngxService.startLoader("loader-01");
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Myheaders", myHeaders)
    this.ngxService.startLoader("loader-01");
    this.cartservice.getCartItemsFromApi({
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("Cart Items From Cart ", response)
      console.log('all cart cakes are coming here', response.data)
      this.cartItemsDb = response.data
      this.totalElements = this.cartItemsDb.length
      this.sum = this.cartItemsDb.reduce(function (a: any, b: any) { // function(previousValue, currentValue)
        return {
          price: a.price + b.price, //select age in object array
        };
      });
      console.log(this.sum); //
      this.cartMessage = response.message
      this.ngxService.stopLoader("loader-01");
    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }

  getCartItems() {
    // this.ngxService.startLoader("loader-01");
    this.cartMessage = ""
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Myheaders", myHeaders)
    console.log(localStorage["token"])
    this.cartservice.getCartItemsFromApi({
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("Cart Items From Cart ", response)
      console.log('all cart cakes are coming here', response.data)
      this.cartItemsDb = response.data
      console.log(this.cartItemsDb)
      this.cartMessage = response.message

      this.ngxService.stopLoader("loader-01");
    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }

  increaseByOne(cakeid: any, cakename: String, cakeprice: any, cakeweight: any) {
    console.log('increaseByOne')
    this.ngxService.startLoader("loader-01");
    this.cartMessage = ""
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Myheaders", myHeaders)
    this.cakeObj = {
      cakeid: cakeid,
      name: cakename,
      price: cakeprice,
      weight: cakeweight
    }
    console.log("cakeObject passed", this.cakeObj)
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Cakeid = ", cakeid)
    console.log("Myheaders = ", myHeaders)
    this.cartservice.addCakeToCartApi(this.cakeObj, {
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("Cake details cakes list", response)
      console.log('all cakes are coming here', response.data)
      this.cakes = response.data
      console.log(this.cakes)
      this.cartMessage = response.message + "quantity Increased"
      this.getCartItems();

      //this.router.navigate(["cart"])
    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }

  removeCakeFromCart(cakeid: any) {

    this.ngxService.startLoader("loader-01");
    this.cartMessage = ""
    this.cakeObj = {
      cakeid: cakeid,
    }
    console.log('remove whole cake from cart', cakeid)
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Myheaders", myHeaders)
    this.cartservice.removeCakeFromCartApi(this.cakeObj, {
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("Cake removed successfully", response)
      console.log('all cakes are coming here', response.data)
      this.cartMessage = response.message
      console.log(response)

      this.getCartItems();

    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }

  decreaseByOne(cakeid: any) {
    this.ngxService.startLoader("loader-01");
    this.cartMessage = ""
    console.log('decreaseByOne')
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Myheaders", myHeaders)
    console.log(localStorage["token"])
    this.cakeObj = {
      cakeid: cakeid,
    }
    this.cartservice.removeOneCakeFromCartApi(this.cakeObj, {
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("Cart Items From Cart ", response)
      console.log('all cart cakes are coming here', response.data)
      this.cartItemsDb = response.data
      this.cartMessage = response.message + "quantity decresed"
      console.log(this.cartItemsDb);
      this.getCartItems();
    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }
  clearCart() {
    this.ngxService.startLoader("loader-01");
    this.cartMessage = ""
    this.cakeObj = {}
    console.log('clearcart')
    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    console.log("Myheaders", myHeaders)
    console.log(localStorage["token"])
    this.cartservice.clearFullCartApi(this.cakeObj, {
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("Cart Items From Cart ", response)
      console.log('all cart cakes are coming here', response.data)
      this.cartItemsDb = response.data
      console.log(this.cartItemsDb)
      this.cartMessage = response.message + "clearCart"

    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }

  ngOnInit(): void {
    // this.ngxService.start();
    this.ngxService.startLoader("loader-01");
  }

}
