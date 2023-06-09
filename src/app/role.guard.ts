import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageServiceService } from './storageService/storage-service.service';

@Injectable()

export class RoleGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageServiceService) {}

  canActivate(): boolean {
      const userRole = this.storageService.getSession('userRole');
      if (userRole == 'admin') {
        this.router.navigateByUrl('/home/admin-section')
        return false;
      }
      return true;
  }
}
