import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LocalstorageService} from '../localstorage.service';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storage: LocalstorageService
  ) { }
    
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    });


    if (this.storage.get('loggedIn')){
      //this.router.navigate(['/userdashboard']);
    }
    
  }
  login():void{
    this.storage.set('loggedIn', true);
    //this.router.navigate(['/userdashboard']);
  }
  
 
  
}


