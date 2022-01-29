import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  @Input() cartItems : any
  @Input() flowerItems : any
  constructor() { }

  ngOnInit(): void {
  }

}
