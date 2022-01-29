import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  cakes: any = []
  constructor(private cakeservice: CakeService, private ngxService: NgxUiLoaderService) {

    this.cakeservice.getAllCakes().subscribe((response: any) => {
      console.log("all cakes list", response)
      console.log('all cakes are coming here', response.data)
      this.cakes = response.data
      this.ngxService.stopLoader("loader-01");

    }, (error) => {
      console.log("error from all cakes api", error)
    })

  }

  ngOnInit(): void {
    this.ngxService.startLoader("loader-01");

  }

}
