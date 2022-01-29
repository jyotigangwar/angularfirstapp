import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appname = "Angular Js Cake Gallery"

  @Output() phone = new EventEmitter()

  isloggedin: boolean = false

  constructor() {
    setTimeout(() => {
      this.phone.emit("10 oclock")
      this.appname = "Angular Js Flower Gallery"

    }, 5000)

  }
  ngDoCheck() {
    //alert('ngDoCheck');
    console.log(this.isloggedin)
    if (localStorage["token"]) {
      console.log("inthe if condition")
      this.isloggedin = true
    }
    console.log(this.isloggedin)

  }


  search() {
    alert('Search here');
  }

  ngOnInit(): void {
  }

}
