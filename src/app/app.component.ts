import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = "jyoti-propertyvalue"
  discountdenahai = "5"
  arnav = "this is the test variable"
  cake: any = {
    name: "truffle cake",
    price: "89",
    image: "assets/images/cake1.jpg"
  }
  cake1: any = {
    name: "Chocochip cake",
    price: "189",
    image: "assets/images/cake2.jpeg",
    category: "bestseller"
  }

  stopCopying(event: any) {
    event.preventDefault()
    //console.log('...Copy is not working')

  }
  doSomething(time: any) {
    console.log("han g pahuch gye" + time);
  }

  title = 'angularproject1';
}
