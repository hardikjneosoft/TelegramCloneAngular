import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://localhost:5000/'
  constructor(private http:HttpClient) {
   }


   logIn(phone:string){
    console.log(phone)
    const obs = this.http.post(this.url+'sendOtp',{"phone_no":phone});
    return obs
   }
    
}
