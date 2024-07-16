import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {BASE_URL} from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly http=inject(HttpClient);
  
  public changeStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public registration(data: any): Observable<any> {
    return this.http.post(`${BASE_URL}user`, data);
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(`${BASE_URL}users`);
  }
  public userLogin(data: any): Observable<any> {
    return this.http.post(`${BASE_URL}user/login`, data);
  }
  public findUserById(id:string):Observable<any>{
    return this.http.get(`${BASE_URL}user/${id}`);
  }

  public deleteAccount(id:string):Observable<any> {
    return this.http.delete(`${BASE_URL}user/${id}`);
  }
}
