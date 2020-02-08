import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxprinter',
  templateUrl: './checkboxprinter.component.html',
  styleUrls: ['./checkboxprinter.component.css']
})
export class CheckboxprinterComponent implements OnInit {

  constructor() { }

  isChecked : any;
  
  ngOnInit() {
  }
  
  check(){
    this.isChecked = true;
  }
  uncheck(){
    this.isChecked = false;
  }

}
