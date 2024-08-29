import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {
 isLoggedIn = false
  constructor() { }

  logIn(phone:string){
    this.isLoggedIn = phone.trim()=='+91 7400288151'
    console.log(this.isLoggedIn)
    console.log(phone.trim())
  }
}
