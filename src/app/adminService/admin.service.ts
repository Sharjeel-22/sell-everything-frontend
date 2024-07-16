import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL_ADMIN } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http = inject(HttpClient);

  public getAllUsers():Observable<any> {
    return this.http.get(`${BASE_URL_ADMIN}users`,);
  }
  public deleteUserById(id:string):Observable<any>{
    return this.http.delete(`${BASE_URL_ADMIN}user/${id}`);
  }
  public editUser(data:any):Observable<any>{
    return this.http.put(`${BASE_URL_ADMIN}user/${data.id}`,data)
  }
}
