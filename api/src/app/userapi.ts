import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userapi {
  apiURL = '';
  constructor(private http: HttpClient){}
  getUsers(){
    return this.http.get(this.apiURL);
  }
}
