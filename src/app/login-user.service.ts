import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http: HttpClient) { }
  loginProcess(userDetails: any) {
    var url = "https://apifromashu.herokuapp.com/api/login"
    return this.http.post(url, userDetails)
  }
}
