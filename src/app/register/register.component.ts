import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  name: any
  email: any
  password: any
  successMsg: any
  submitted: any = false
  signupForm: FormGroup
  constructor(private signupservice: SignupService, private formbuilder: FormBuilder) {
    this.signupForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required]
    })
  }

  signup() {
    this.submitted = true
    console.log("error sin form ", this.signupForm, this.signupForm.invalid)

    if (this.signupForm.invalid) {
      return
    }
    else {
      alert(JSON.stringify(this.signupForm.value))
      var userObj = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      console.log(JSON.stringify(this.signupForm.value));
      this.signupservice.signupProcess(JSON.stringify(this.signupForm.value)).subscribe((response: any) => {
        console.log(response)
        this.successMsg = response.message

      }, (error) => {
        console.log("error from register api", error)
      })
    }
  }
  registerUser() {
    console.log('in user register');
    console.log('input values are', this.name, this.email, this.password);
    var userObj = {
      name: 'jyoti',
      email: 'vb.jyoti@gmail.com',
      password: 'jyotirani'
    };
    // { name: 'jtori', email: 'jyoti@gmail.com', password: 'jyoti' }
    this.signupservice.signupProcess(userObj).subscribe((response: any) => {
      console.log(response)
      this.successMsg = response.message

    }, (error) => {
      console.log("error from register api", error)
    })
  }

  ngOnInit(): void {
  }



}
