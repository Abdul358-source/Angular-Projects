import { Component, OnInit } from '@angular/core';
import {UserFirst} from './Computer';
import {UserSecond} from './Mobile';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  device = UserSecond;
  lab : UserFirst;

  constructor() { }

  ngOnInit() {
  }

}
