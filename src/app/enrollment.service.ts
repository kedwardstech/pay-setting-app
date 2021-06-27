import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='https://bmlr26sjp0.execute-api.us-west-2.amazonaws.com/Staging/paysettingappresource';
  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    return this._http.post<any>(this._url, user); 
  }
}
