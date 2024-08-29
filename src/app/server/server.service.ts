import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket,io as Io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://localhost:5000/'
  phone = ''
  loggedIn= false
  io:Socket
  constructor(private http:HttpClient) {
    this.io = Io(this.url)
    console.log(this.io.active)
    this.io.on('connect',()=>{
      console.log("connected...")
    })
    console.log('Server service initialized.......')
   }


   logIn(phone:string){
    this.phone = phone
    const obs = this.http.post(this.url+'sendOtp',{"phone_no":phone});
    return obs
   }

   verifyOtp(phone:string,otp:string){
    return this.http.post(this.url+'verifyOtp',{phone,otp})
   }
   
   initSocket(){
      this.io = Io()
   }


}
