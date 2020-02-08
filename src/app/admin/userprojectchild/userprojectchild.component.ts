import { Component, OnInit, Input,EventEmitter, Output, ContentChild } from '@angular/core';
import {Projects} from '../../projects';
import {ProjectsService} from '../../projects.service';
import { CheckboxprinterComponent } from '../checkboxprinter/checkboxprinter.component';

@Component({
  selector: 'app-userprojectchild',
  templateUrl: './userprojectchild.component.html',
  styleUrls: ['./userprojectchild.component.css']
})
export class UserprojectchildComponent implements OnInit {

  @Input("currentproject")project:Projects;
  @Input("recordIndex") i : number;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  
  hidedetails:boolean = false;
  MySubscription: any;

  constructor(public projectservice : ProjectsService) { }

  ngOnInit() {
    this.MySubscription = 
    this.projectservice.MySubject.subscribe((hide)=>{
      this.hidedetails = hide;
    })
  }
  OnEditClick(event, i){
    this.editClick.emit({event, i});
  }

  OnDeleteClick($event, i){
    this.deleteClick.emit({event, i});
  }

  ngOnDestroy(){
    this.MySubscription.unsubscribe();
  }

  @ContentChild("selectionBox") selectionBox : CheckboxprinterComponent;

  isAllCheckedChange(b:boolean){
    if(b){
      this.selectionBox.check();
    }
    else{
      this.selectionBox.uncheck();
    }
  }
}
