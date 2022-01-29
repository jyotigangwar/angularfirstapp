import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http: HttpClient) { }
  userDetails: any
  signupProcess(userDetails: any) {
    var url = "https://apifromashu.herokuapp.com/api/register"
    return this.http.post(url, userDetails)
  }

}
