import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../cake.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  querytext: string = ""
  searchresults: any = []
  constructor(private cakeservice: CakeService, private route: ActivatedRoute) {

    this.route.queryParams.subscribe((query: any) => {
      this.querytext = query["q"]
      var url = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + this.querytext
      this.cakeservice.searchCakes(url).subscribe((response: any) => {
        console.log("response from search cakes api", response)
        this.searchresults = response.data
      }, (error) => {
        console.log("error from search cakes api", error)
      })
    })

  }

  ngOnInit(): void {
  }

}
