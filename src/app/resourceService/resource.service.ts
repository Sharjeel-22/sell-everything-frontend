import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  // private BASE_URL = "https://sell-everything.herokuapp.com/api/";
  private BASE_URL = "http://localhost:5000/api/";
  constructor(private http:HttpClient) { }


  public addResouce(data:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}resource`,data);
  }

  public getAllResouces():Observable<any>{
    return this.http.get(`${this.BASE_URL}resource`);
  }

  public postComment(comment:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}resource/comment`,comment);
  }
  public updateResource(data:any):Observable<any>{
    return this.http.put(`${this.BASE_URL}resource/${data.id}`,data);
  }
  public deleteResource(id:string):Observable<any>{
    return this.http.delete(`${this.BASE_URL}resource/${id}`);
  }
  public deleteComment(data:{ postId: string; id: string; }):Observable<any>{
    return this.http.put(`${this.BASE_URL}resource/comment/update/${data.id}`,data);
  }
  public updateResourceComment(data:any):Observable<any> {
    return this.http.put(`${this.BASE_URL}resource/comment/${data.postId}`,data);
  }
}
