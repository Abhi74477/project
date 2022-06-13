import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NewUser } from '../shared/models/NewUser';
import { SignUp } from '../shared/models/SignUp';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  baseUrl: string ="http://localhost:1000";

  userLogin(user:any){
    
      return this.http.post<any>("http://localhost:1000/login",user)
      };
   

  signUp(user:any){
    return this.http.post<any>(this.baseUrl+"/signup",user).pipe(catchError(this.handleError));
  }
  private handleError(errorResponse:HttpErrorResponse){
    return throwError(errorResponse);
  }
}

