import { Component } from '@angular/core';
import { ServerService } from '../server/server.service';
import { error } from 'jquery';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrl: './verification-code.component.css'
})
export class VerificationCodeComponent {
    phone:string = ''
    otp=''
    constructor (private server:ServerService,private router:Router){}

    verifyOtp(otp:string){
      const obs = this.server.verifyOtp(this.phone,otp)
      obs.subscribe({
        next:success=>{
          console.log(success);
          
          this.server.loggedIn = true
          this.router.navigate(['chat'])
        },
        error:error=>{
          console.log(error)
          this.server.loggedIn = true
          this.server.phone = this.phone
          // this.router.navigate(['chat'])
        }
      }) 
    }

    monitorInput(field:any){
        field.value = field.value.slice(0,6)
    }
}
