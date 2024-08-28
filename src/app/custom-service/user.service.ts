import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginFlag:boolean=true
  constructor() {
    console.log("in UserService")
   }

   login(){

   }

   changePassword(){

   }

   forgotPassword(){

   }

}
