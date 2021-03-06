import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesfileService {
  apiUrl = "https://jsonplaceholder.typicode.com/posts";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  

  constructor(private http: HttpClient) { }


getBooks(): Observable<any> {
  return this.http.get(this.apiUrl,this.httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

getBook(id: string): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get(url, this.httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

postBook(data): Observable<any> {
  return this.http.post(this.apiUrl, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}

updateBook(data): Observable<any> {
  return this.http.put(this.apiUrl, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}

deleteBook(id: string): Observable<{}> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
};
private extractData(res: Response) {
  let body = res;
  return body || { };
}
}