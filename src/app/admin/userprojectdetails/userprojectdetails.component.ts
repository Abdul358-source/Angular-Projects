import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/projects';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-userprojectdetails',
  templateUrl: './userprojectdetails.component.html',
  styleUrls: ['./userprojectdetails.component.css']
})
export class UserprojectdetailsComponent implements OnInit {

  project : Projects;
  pid : any

  constructor(private activatedroutes : ActivatedRoute, private projectservice : ProjectsService) { 
    this.project= new Projects();
  }

  ngOnInit() {
    
  }

}
