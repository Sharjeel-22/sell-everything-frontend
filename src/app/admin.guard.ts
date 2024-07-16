import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageServiceService } from './storageService/storage-service.service';

@Injectable()

export class AdminGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageServiceService) {}

  canActivate(): boolean {
      const userRole = this.storageService.getSession('userRole');
      if (userRole == 'user') {
        this.router.navigateByUrl('/home/user-resource')
        return false;
      }
      return true;
  }
}
