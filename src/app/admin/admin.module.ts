import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UseraboutComponent } from './userabout/userabout.component';
import {UserdashboardService} from '../userdashboard.service';
import {ProjectsComponent} from './projects/projects.component';
import {FormsModule} from '@angular/forms';
import { UserdashboardTwoComponent } from './userdashboard-two/userdashboard-two.component'
import { NumberToWordsPipe } from '../number-to-words.pipe';
import {UserprojectchildComponent} from './userprojectchild/userprojectchild.component';
import {CheckboxprinterComponent} from './checkboxprinter/checkboxprinter.component';
import {UserprojectdetailsComponent} from './userprojectdetails/userprojectdetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserdashboardComponent,
    MyprofileComponent,
    UseraboutComponent,
    ProjectsComponent,
    UserdashboardTwoComponent,
    NumberToWordsPipe,
    UserprojectchildComponent,
    CheckboxprinterComponent,
    UserprojectdetailsComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports : [UserdashboardComponent, MyprofileComponent, UseraboutComponent, ProjectsComponent, UserdashboardTwoComponent, UserprojectchildComponent, CheckboxprinterComponent,UserprojectdetailsComponent],
  //providers : [UserdashboardService]
})
export class AdminModule { }
