import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl: string = "https://reqres.in/api";
  api: string = "/users";

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    console.log("Service - before calling get.");
    let observable: Observable<any> = this.http.get<any>(this.baseUrl + this.api + "/1");
    console.log("Service - after calling get.");
    return observable;
  }

  addUser(user: string): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    return this.http.post<any>(
      this.baseUrl + this.api, 
      user, 
      {headers: header}
    );    
  }

  updateUser(user: string): Observable<any> {
    let header : HttpHeaders = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    return this.http.put<any>(
      this.baseUrl + this.api + "/2", 
      user, 
      {headers: header}
    );    
  }

  deleteUser(): Observable<any> {
    let observable: Observable<any> = this.http.delete<any>(
      this.baseUrl + this.api + "/1", 
      { observe: 'response'}
    );
    return observable;
  }

}
