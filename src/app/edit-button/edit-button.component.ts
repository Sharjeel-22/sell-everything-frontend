import { Component, inject, Input } from '@angular/core';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  @Input() user: any;
  private readonly storageService = inject(StorageServiceService);
  private readonly router = inject(Router);

  public onEditUser(): void {
    this.storageService.localStorage("user-detail", this.user);
    this.router.navigateByUrl("/home/update-user/" + this.user._id)
  }

}
