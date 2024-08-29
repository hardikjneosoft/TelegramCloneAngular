import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './customeClass/employee';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://localhost:3000/'
  constructor(private http:HttpClient) {
   }


   logIn(phone:string){
    const obs = this.http.post(this.url+'sendOtp',phone);
    return obs
   }
    
}
