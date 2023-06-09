import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private BASE_URL = "http://localhost:5000/api/";

  constructor(private http:HttpClient) { }

  public getAllUsers():Observable<any> {
    return this.http.get(`${this.BASE_URL}users`,);
  }
  public deleteUserById(id:string):Observable<any>{
    return this.http.delete(`${this.BASE_URL}user/${id}`);
  }
  public editUser(data:any):Observable<any>{
    return this.http.put(`${this.BASE_URL}user/${data.id}`,data)
  }
}
