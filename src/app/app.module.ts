import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvengersComponent } from './avengers/avengers.component';
import { EndgameComponent } from './endgame/endgame.component';
import { HeadersComponent } from './headers/headers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { FooterComponent } from './footer/footer.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { SidebarOneComponent } from './sidebar-one/sidebar-one.component';
import { UserformsComponent } from './userforms/userforms.component';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { MedicalComponent } from './medical/medical.component';
import { OperationsComponent } from './operations/operations.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { SideComponent } from './side/side.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { NameeditorComponent } from './nameeditor/nameeditor.component';
import { HeaderCobraComponent } from './header-cobra/header-cobra.component';
import { HomeComponent } from './home/home.component';
import { LifeguardComponent } from './lifeguard/lifeguard.component';
import { FirstaidComponent } from './firstaid/firstaid.component';
import { SportserviceComponent } from './sportservice/sportservice.component';
import { ContactcobraComponent } from './contactcobra/contactcobra.component';
import { FootercobraComponent } from './footercobra/footercobra.component';
import { SectioncobraComponent } from './sectioncobra/sectioncobra.component';
import { IndexcobraComponent } from './indexcobra/indexcobra.component';
import { ServicesfileComponent } from './servicesfile/servicesfile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicefiletwoComponent } from './servicefiletwo/servicefiletwo.component';
import { ServicefilefourComponent } from './servicefilefour/servicefilefour.component';
import { LoadingComponent } from './loading/loading.component';
import { OrderingComponent } from './ordering/ordering.component';
import { HeropenComponent } from './heropen/heropen.component';
import { HeroinepenComponent } from './heroinepen/heroinepen.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { UpperComponent } from './upper/upper.component';
import { MiddleComponent } from './middle/middle.component';
import { LowerComponent } from './lower/lower.component';
import { AttendanceformOneComponent } from './attendanceform-one/attendanceform-one.component';
import { AttendanceformTwoComponent } from './attendanceform-two/attendanceform-two.component';
import { FullogindetailsComponent } from './fullogindetails/fullogindetails.component';
import { UserayshaComponent } from './useraysha/useraysha.component';
import { UserusamaComponent } from './userusama/userusama.component';
import { UserstemplateComponent } from './userstemplate/userstemplate.component';
import { UsertemplatetwoComponent } from './usertemplatetwo/usertemplatetwo.component';
import { UserreactiveformComponent } from './userreactiveform/userreactiveform.component';
import { UsertemplatedriveformComponent } from './usertemplatedriveform/usertemplatedriveform.component';
import { UsersinputsComponent } from './usersinputs/usersinputs.component';
import { UserinputsTwoComponent } from './userinputs-two/userinputs-two.component';
import { UserOutputOneComponent } from './user-output-one/user-output-one.component';
import { UserOutPutTwoComponent } from './user-out-put-two/user-out-put-two.component';
import { AttendanceformThreeComponentComponent } from './attendanceform-three-component/attendanceform-three-component.component';
import { AttendanceformFourComponentComponent } from './attendanceform-four-component/attendanceform-four-component.component';
import { FulllogindetailstwoComponent } from './fulllogindetailstwo/fulllogindetailstwo.component';
import { MedicaldataComponent } from './medicaldata/medicaldata.component';
import { SchooldataComponent } from './schooldata/schooldata.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeropenDetailsComponent } from './heropen-details/heropen-details.component';
import { UsershooksComponent } from './usershooks/usershooks.component';
import { ServicefilesixComponent } from './servicefilesix/servicefilesix.component';
import { UsershookTwoComponent } from './usershook-two/usershook-two.component';
import { RedblackDirective } from './redblack.directive';
import { UserloginOneComponent } from './userlogin-one/userlogin-one.component';
import { UserlogindetailsComponent } from './userlogindetails/userlogindetails.component';
import { Bench1Component } from './bench1/bench1.component';
import { Bench2Component } from './bench2/bench2.component';
import { Bench3Component } from './bench3/bench3.component';
import { AttendisplayOneComponent } from './attendisplay-one/attendisplay-one.component';
import { AttendisplayTwoComponent } from './attendisplay-two/attendisplay-two.component';
import { NameediotrComponent } from './nameediotr/nameediotr.component';
import { ProfilediotrComponent } from './profilediotr/profilediotr.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { CreateemployeeTwoComponent } from './createemployee-two/createemployee-two.component';
import { CreateemployeethreeComponent } from './createemployeethree/createemployeethree.component';
import { CreateemployeefourComponent } from './createemployeefour/createemployeefour.component';
import { CreateemployeefiveComponent } from './createemployeefive/createemployeefive.component';
import { CreateemployeesixComponent } from './createemployeesix/createemployeesix.component';
import { CreateuserngcontainerComponent } from './createuserngcontainer/createuserngcontainer.component';
import { CreatetemplateemployeeComponent } from './createtemplateemployee/createtemplateemployee.component';
import { EmployeeservicefileComponent } from './employeeservicefile/employeeservicefile.component';
import { UserlistdeviceComponent } from './userlistdevice/userlistdevice.component';
import { UserlistcomputerComponent } from './userlistcomputer/userlistcomputer.component';
import { UseroutputdeviceComponent } from './useroutputdevice/useroutputdevice.component';
import { BlueblackDirective } from './blueblack.directive';
import { GreenblackDirective } from './greenblack.directive';
import { UserreactiveformtestComponent } from './userreactiveformtest/userreactiveformtest.component';
import { ServicefileeightComponent } from './servicefileeight/servicefileeight.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UsernavheaderComponent } from './usernavheader/usernavheader.component';
import { AdminModule } from './admin/admin.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserdashboardTwoComponent } from './admin/userdashboard-two/userdashboard-two.component';
import {UserInterceptor} from './userinterceptor';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ConfirmpasswordDirective } from './confirmpassword.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    ApplicationsComponent,
    DashboardComponent,
    AvengersComponent,
    EndgameComponent,
    HeadersComponent,
    SidebarsComponent,
    FooterComponent,
    FulldetailsComponent,
    HeaderOneComponent,
    SidebarOneComponent,
    UserformsComponent,
    FooterOneComponent,
    ExplorerComponent,
    MedicalComponent,
    OperationsComponent,
    TopComponent,
    BottomComponent,
    SideComponent,
    ProfilingComponent,
    NameeditorComponent,
    HeaderCobraComponent,
    HomeComponent,
    LifeguardComponent,
    FirstaidComponent,
    SportserviceComponent,
    ContactcobraComponent,
    FootercobraComponent,
    SectioncobraComponent,
    IndexcobraComponent,
    ServicesfileComponent,
    ServicefiletwoComponent,
    ServicefilefourComponent,
    LoadingComponent,
    OrderingComponent,
    HeropenComponent,
    HeroinepenComponent,
    HeroDetailsComponent,
    UpperComponent,
    MiddleComponent,
    LowerComponent,
    AttendanceformOneComponent,
    AttendanceformTwoComponent,
    FullogindetailsComponent,
    UserayshaComponent,
    UserusamaComponent,
    UserstemplateComponent,
    UsertemplatetwoComponent,
    UserreactiveformComponent,
    UsertemplatedriveformComponent,
    UsersinputsComponent,
    UserinputsTwoComponent,
    UserOutputOneComponent,
    UserOutPutTwoComponent,
    AttendanceformThreeComponentComponent,
    AttendanceformFourComponentComponent,
    FulllogindetailstwoComponent,
    MedicaldataComponent,
    SchooldataComponent,
    HeroesComponent,
    HeropenDetailsComponent,
    UsershooksComponent,
    ServicefilesixComponent,
    UsershookTwoComponent,
    RedblackDirective,
    UserloginOneComponent,
    UserlogindetailsComponent,
    Bench1Component,
    Bench2Component,
    Bench3Component,
    AttendisplayOneComponent,
    AttendisplayTwoComponent,
    NameediotrComponent,
    ProfilediotrComponent,
    CreateemployeeComponent,
    CreateemployeeTwoComponent,
    CreateemployeethreeComponent,
    CreateemployeefourComponent,
    CreateemployeefiveComponent,
    CreateemployeesixComponent,
    CreateuserngcontainerComponent,
    CreatetemplateemployeeComponent,
    EmployeeservicefileComponent,
    UserlistdeviceComponent,
    UserlistcomputerComponent,
    UseroutputdeviceComponent,
    BlueblackDirective,
    GreenblackDirective,
    UserreactiveformtestComponent,
    ServicefileeightComponent,
    ViewComponentComponent,
    UsernavbarComponent,
    UsernavheaderComponent,
    UserloginComponent,
    UsersignupComponent,
    ConfirmpasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
