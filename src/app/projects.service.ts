import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Observer, Subject } from 'rxjs';
import { Projects } from './projects';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public MySubject:Subject<boolean>;
  private MyObservers:Observer<boolean>[]=[];

  constructor( private httpclient : HttpClient) {
    this.MySubject = new Subject<boolean>(); 

   }

  hidedetails:boolean = false;
  
  toggleDetails(){
    this.hidedetails=!this.hidedetails;
   this.MySubject.next(this.hidedetails);
  }

  getAllProjects(): Observable<Projects[]>{

    var currentUser = {token : ""};
    var headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer");

    if(sessionStorage.currentUser != null){
      currentUser = JSON.parse(sessionStorage.currentUser);
      headers = headers.set("Authorization", "Bearer" + currentUser.token);
    }

    return this.httpclient.get<Projects[]>("https://jsonplaceholder.typicode.com/posts", {responseType : "json"})

    .pipe (map(
      (data: Projects[]) => {
        for (let i = 0; i < data.length; i++){
          data[i].userId = data[i].userId * 500;
        }
        return data;
      }
    ));
  }

  insertAllProjects(newProjects:Projects): Observable<Projects>{
    return this.httpclient.post<Projects>("https://jsonplaceholder.typicode.com/posts" , newProjects, {responseType : "json"});
  }
  UpdateAllProjects(existingProjects : Projects):Observable<Projects>{
    return this.httpclient.put<Projects>("https://jsonplaceholder.typicode.com/posts", existingProjects, {responseType : "json"});

  }

  DeleteAllProjects(UserId:any):Observable<any>{
    return this.httpclient.delete<any>("https://jsonplaceholder.typicode.com/posts?UserId=" + UserId);
  }
  
}
