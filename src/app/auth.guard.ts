import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageServiceService } from './storageService/storage-service.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageServiceService) {}
  canActivate(): boolean {
    const isUserLogin = this.storageService.getSession('token');
    if (isUserLogin) {
     return true;
    }
    this.router.navigateByUrl('/user-login');
    return false;
  }
}
