import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceInformationService {
  private apiUrl = 'https://ipinfo.io/json?token=b6c4d3fccdec50';
  private http = inject(HttpClient);

  constructor() { }
  public getDeviceInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
