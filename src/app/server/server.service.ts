import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'jquery';
import { Socket,io} from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://localhost:5500/'
  phone = ''
  userInfo = {
    fname:'',
    lname:'',
    username:'',
    phone:''
  }
  loggedIn= false
  signingUp = false
  socket:Socket | undefined
  constructor(private http:HttpClient) {
    console.log('Server service initialized....')
   }


   logIn(phone:string){
    this.phone = phone
    const obs = this.http.post(this.url+'login/otp',{"phone_no":phone});
    return obs
   }

   signUp(userInfo:any){
    this.userInfo = Object.assign(userInfo)
    this.phone = userInfo.phone
    this.signingUp = true
    return this.http.post(this.url+'signup/otp',{phone:this.phone})
   }

   verifyOtp(phone:string,otp:string){
    if(this.signingUp){
      return this.http.post(this.url+'signup/verify/otp',{user:this.userInfo,otp_:otp})
    }
    return this.http.post(this.url+'login/verify/otp',{phone,otp})
   }

   sendFile(data:any){
      const files = new FormData()
      return this.http.post(this.url+'upload/file',data)
   }

   getMessages():any{
    return this.http.get(this.url+'get/messages')
   }
   
   putMessages(data:any){
    this.http.put(this.url+'updates/messages',data).subscribe({
      next:()=>{},
      error:error=>console.log(error)
    })
   }

   initSocket(){
    this.socket = io(this.url)
    this.socket.on('connect',()=>{
      console.log("connected...")
    })

    this.socket.on('disconnect', () => {
      console.log("Socket disconnected");
  });
   };

}
