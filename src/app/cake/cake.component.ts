import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
@Input() name : any
@Input() discount : String = ""
@Input() cake : any
@Input() arnav : any

  constructor() { 
    //
    console.log("Mujhe mila hai", this.name, this.discount)
  }

  ngOnInit(): void {
  console.log("Mujhe mila hai", this.name, this.discount)
  }

}
