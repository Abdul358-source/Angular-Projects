import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LocalstorageService} from '../localstorage.service';
@Component({
  selector: 'app-usernavheader',
  templateUrl: './usernavheader.component.html',
  styleUrls: ['./usernavheader.component.css']
})
export class UsernavheaderComponent implements OnInit {

  constructor(private storage : LocalstorageService, private router : Router) { }

  ngOnInit() {
  
  }
  logout(): void {
    this.storage.clear();
    this.router.navigate(['']);
  }
  
}
