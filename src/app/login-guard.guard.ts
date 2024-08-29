import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './server/server.service';

export function loginGuardGuard ():boolean{

  const router = inject(Router)
  const server= inject(ServerService)
  if(server.loggedIn){
    console.log('true');
    return true
  }
  router.navigate(['../home'])
  return false;
};
