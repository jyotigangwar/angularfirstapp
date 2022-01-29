import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  cake: any = {
    image: "assets/images/cake1.jpg"
  }
  cake1: any = {
    image: "assets/images/cake2.jpeg"
  }
  cake2: any = {
    image: "assets/images/shinchan.jpg"
  }
  cake3: any = {
    image: "assets/images/singham.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
