import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CakeService } from '../cake.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {

  errorMsg: any
  successMsg: any
  name: any
  price: any
  image: any
  weight: any
  eggless: any
  description: any
  ingredients: any
  type: any

  cakes: any = []
  categories: any = [
    "Eggless",
    "With Egg",
    "Chocolate",
    "Strawberry"
  ]
  cake: any = {
    name: '',
    price: '',
    type: '',
    ingredients: '',
    description: '',
    eggless: '',
    weight: '',
    image: '',
  }
  constructor(private cakeservice: CakeService, private router: Router) { }

  addCake() {
    console.log('addcake is called')
    var temp = { ...this.cake }
    this.cakes.push(temp)
    console.log("cakes list", this.cakes)
  }
  removeCake(index: any) {
    console.log('removeCake is called', index)
    this.cakes.splice(index, 1)
    console.log("cakes list", this.cakes)
  }

  ngOnInit(): void {
  }

  upload(e: any) {
    console.log('in upload file function')
    var file = e.target.files[0]
    var formdata = new FormData()
    var url = "https://apifromashu.herokuapp.com/api/upload"

    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    formdata.append('file', file)
    this.cakeservice.uploadCakeImage(url, formdata, {
      headers: myHeaders
    }).subscribe((response: any) => {
      console.log("response.from upload api", response)
      this.cake.image = response.imageUrl
    }, (error) => {
      console.log("error from upload api", error)
    });
  }

  addCakeByApi() {
    var cakeObj = {
      name: this.cake.name,
      type: this.cake.type,
      price: this.cake.price,
      ingredients: this.cake.ingredients,
      description: this.cake.description,
      eggless: this.cake.eggless,
      weight: this.cake.weight,
      image: this.cake.image,
    }
    var url = "https://apifromashu.herokuapp.com/api/addcake"
    console.log(cakeObj);

    var myHeaders = new HttpHeaders()
    myHeaders = myHeaders.append('authtoken', localStorage["token"])
    this.cakeservice.addCakeByApi(url, cakeObj, {
      headers: myHeaders
    }).subscribe((response: any) => {
      this.errorMsg = ""
      this.successMsg = ""
      console.log("response.from addcake api", response)
      this.successMsg = response
      this.router.navigate([""])
    }, (error) => {
      this.errorMsg = "Response from addcake api. " + error
      console.log("error from addcake api", error)

    })

  }
}
