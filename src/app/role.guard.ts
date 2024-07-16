import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageServiceService } from './storageService/storage-service.service';

@Injectable()

export class RoleGuard implements CanActivate {
  private readonly router = inject(Router);
  private readonly storageService = inject(StorageServiceService);
  
  canActivate(): boolean {
      const userRole = this.storageService.getSession('userRole');
      if (userRole == 'admin') {
        this.router.navigateByUrl('/home/admin-section')
        this.storageService.localStorage("nev-permission",true);
        return false;
      }
      return true;
  }
}
