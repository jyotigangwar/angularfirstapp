import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = "https://apifromashu.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  addCakeToCartApi(cakeId: any, options: any) {
    var url = "https://apifromashu.herokuapp.com/api/addcaketocart"
    console.log('in Service', cakeId, options, url)
    return this.http.post(url, cakeId, options)
  }

  getCartItemsFromApi(options: any) {
    var url = "https://apifromashu.herokuapp.com/api/cakecart"
    console.log('in Service call ', options)
    return this.http.post(url, "", options)
  }
  clearFullCartApi(cartObj: any, options: any) {
    this.url = this.url + "/clearcart"
    this.url = "https://apifromashu.herokuapp.com/api/clearcart"
    return this.http.post(this.url, cartObj, options)
  }


  removeCakeFromCartApi(cakeObj: any, options: any) {
    this.url = "https://apifromashu.herokuapp.com/api/removecakefromcart"
    return this.http.post(this.url, cakeObj, options)
  }

  removeOneCakeFromCartApi(cartObj: any, options: any) {
    this.url = "https://apifromashu.herokuapp.com/api/removeonecakefromcart"
    return this.http.post(this.url, cartObj, options)
  }






}
