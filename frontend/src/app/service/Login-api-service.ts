import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/users';
@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  baseUri: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  routerLogin:Router;
  user: User
  tokenResponse:User;
  constructor(private http: HttpClient,router:Router) {
   
  }
  // Login
  // proceedLogin(data): Observable<any> {
    proceedLogin(data): User {
    let url = `${this.baseUri}/proceedLogin`;
    //todo: call response from mongodb table
    this.user.username="admin"
    this.user.password="admin"
    localStorage.setItem("user","ad")
    return this.user;
    //return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  
  validate(data): User {
    
  return this.user;
    
  }

  logOut()
  {
    localStorage.clear();
    this.routerLogin.navigate(['/app-login']);
  }

  //dynaimc
  // getRoleByToken(token:any)
  // {
  //   let _token=token.split('.')[1]
  //   this.tokenResponse=JSON.parse(atob(token))
  //   console.log(this.tokenResponse);
  // }

  //todo: static
  // getRoleByToken(): String
  // {
  //   // let _token=token.split('.')[1]
  //   // this.tokenResponse=JSON.parse(atob(token))
  //   console.log(this.tokenResponse);
  //   retun "admin";
  // }
  

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

   
}