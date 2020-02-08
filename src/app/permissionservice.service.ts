import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationserviceService} from './authenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionserviceService implements CanActivate  {

  constructor(private auth : AuthenticationserviceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.auth.isAuth();
  }
 
}
