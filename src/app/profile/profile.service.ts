import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  usersUrl: string = "https://reqres.in/api/users/1";

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    console.log("Service - before calling get.");
    let observable: Observable<any> = this.http.get<any>(this.usersUrl);
    console.log("Service - after calling get.");
    return observable;
  }
}
