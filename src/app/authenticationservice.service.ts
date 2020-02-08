import { Injectable } from '@angular/core';
import {LocalstorageService} from './localstorage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  constructor(private storage : LocalstorageService, private router : Router) { }

  isAuth(): boolean {
    return this.storage.get('loggedIn') ? true : false;
  }

 
}
