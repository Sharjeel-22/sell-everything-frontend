import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private BASE_URL = "https://sell-everything.herokuapp.com/api/";
  constructor(private http:HttpClient) { }


  public addResouce(data:any,token:string):Observable<any>{
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.BASE_URL}resource`,data,{headers});
  }

  public getAllResouces(token:string):Observable<any>{
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.BASE_URL}resources`,{headers});
  }

  public postComment(comment:any,token:string):Observable<any>{
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.BASE_URL}resource/comment`,comment,{headers});
  }
  public updateResource(data:any,token:string):Observable<any>{
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.BASE_URL}resource/${data.id}`,data,{headers});
  }
  public deleteResource(id:string,token:string):Observable<any>{
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.BASE_URL}resource/${id}`,{headers});
  }
  public deleteComment(data:{ postId: string; id: string; },token:string):Observable<any>{
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.BASE_URL}resource/comment/update/${data.id}`,data,{headers});
  }
  public updateResourceComment(data:any,token:any):Observable<any> {
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.BASE_URL}resource/comment/${data.postId}`,data,{headers});
  }
}
