import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  public progressProvider:WritableSignal<number> = signal<number>(0);
  // private BASE_URL = "https://sell-everything.herokuapp.com/api/";
  private BASE_URL = "http://localhost:5000/api/";
  constructor(private http:HttpClient) { }


  public addResource(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}resource`, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressProvider.set(Math.round((100 / event.total) * event.loaded));
        } else if (event.type === HttpEventType.Response) {
          this.progressProvider.set(0);
          return event.body;
        }
      }),
      catchError((err: any) => {
        this.progressProvider.set(0);
        alert(err.message);
        return throwError(err.message);
      })
    );
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
