import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {BASE_URL_RESOURCE} from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private readonly http = inject(HttpClient);
  public progressProvider:WritableSignal<number> = signal<number>(0);

  public addResource(data: any): Observable<any> {
    return this.http.post(`${BASE_URL_RESOURCE}resource`, data, {
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
    return this.http.get(`${BASE_URL_RESOURCE}resource`);
  }

  public postComment(comment:any):Observable<any>{
    return this.http.post(`${BASE_URL_RESOURCE}resource/comment`,comment);
  }
  public updateResource(data:any):Observable<any>{
    return this.http.put(`${BASE_URL_RESOURCE}resource/${data.id}`,data);
  }
  public deleteResource(id:string):Observable<any>{
    return this.http.delete(`${BASE_URL_RESOURCE}resource/${id}`);
  }
  public deleteComment(data:{ postId: string; id: string; }):Observable<any>{
    return this.http.put(`${BASE_URL_RESOURCE}resource/comment/update/${data.id}`,data);
  }
  public updateResourceComment(data:any):Observable<any> {
    return this.http.put(`${BASE_URL_RESOURCE}resource/comment/${data.postId}`,data);
  }
}
