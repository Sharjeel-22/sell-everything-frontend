import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public changeStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // private BASE_URL = "https://sell-everything.herokuapp.com/api/";
  private BASE_URL = "http://localhost:5000/api/";

  constructor(private http: HttpClient) { }

  public registration(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}user`, data);
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}users`);
  }
  public userLogin(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}user/login`, data);
  }
  public findUserById(id:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}user/${id}`);
  }

  public deleteAccount(id:string):Observable<any> {
    return this.http.delete(`${this.BASE_URL}user/${id}`);
  }
}
