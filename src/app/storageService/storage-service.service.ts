import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  public localStorage(key: any, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getLocalStorage(key: any) {
    const data: any = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  public deleteLocalStorage(key:any): void {
    localStorage.removeItem(key);
  }
  public setSession(key: any, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  public getSession(key: any) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  public deleteSession(key:string):void{
    sessionStorage.removeItem(key);
  }

}
