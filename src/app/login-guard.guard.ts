import { inject } from '@angular/core';
import { CheckLoginService } from './check-login.service';
import { Router } from '@angular/router';

export function loginGuardGuard ():boolean{

  const router = inject(Router)
  const check_login= inject(CheckLoginService)
  if(check_login.isLoggedIn){
    console.log('true');
    return true
  }
  router.navigate(['../home'])
  return false;
};
