import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: any
  password: any
  successMsg: any
  errorMsg: any
  isloggedin: Boolean = false
  constructor(private loginservice: LoginUserService, private router: Router) { }

  login() {
    console.log(this.email, this.password)
    var userObj = {
      email: this.email,
      password: this.password
    }
    this.loginservice.loginProcess(userObj).subscribe((response: any) => {
      this.errorMsg = ""
      this.successMsg = ""
      console.log("response.from login api", response)
      if (response.token) {
        localStorage["token"] = response.token
        this.successMsg = "login Successful!"
        this.isloggedin = true
        console.log(this.isloggedin)
        this.router.navigate([""])
        //.navigate[""]
      }
      else {
        this.errorMsg = "Invalid Credentials"
      }
    }, (error) => {
      this.errorMsg = "Invalid Credentials. " + error.message
      console.log("error from register api", error)
    })
  }

  ngOnInit(): void {
  }

}
