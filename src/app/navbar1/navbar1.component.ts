import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  //@Output() phone = new EventEmitter()
  Shrikant: any = "Pehle se hi "
  queryText: any = ""
  isloggedin: Boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    console.log('Search here 2', this.queryText);
    this.router.navigate(["/search"], { queryParams: { q: this.queryText } })

  }
  ngDoCheck() {    // Kisi bhi dusre component me kuch change toh kon big boss sab dekh 
    if (localStorage["token"]) {
      this.isloggedin = true
    }
    console.log("====", this.isloggedin)
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.clear()
    this.isloggedin = false
    this.router.navigate([""]);
    //window.location.href = "/"
  }

}
function Output() {
  throw new Error('Function not implemented.');
}

