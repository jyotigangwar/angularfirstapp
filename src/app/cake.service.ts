import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http: HttpClient) { }


  getAllCakes() {
    var url = "https://apifromashu.herokuapp.com/api/allcakes"
    return this.http.get(url)
  }

  getCakeDetails(url: any) {
    return this.http.get(url)
  }

  uploadCakeImage(url: any, formdata: any, headers: any) {
    return this.http.post(url, formdata, headers)

  }

  addCakeByApi(url: string, requestObj: any, headers: any) {
    return this.http.post(url, requestObj, headers)
  }


  searchCakes(url: string) {
    return this.http.get(url)
  }

}
