import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employeeForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullname : new FormControl(),
      email : new FormControl()
    });
  }

  onSubmit():void{
    console.log(this.employeeForm.value);
  }

}
