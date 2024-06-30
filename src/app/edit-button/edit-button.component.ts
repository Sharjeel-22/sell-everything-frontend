import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  @Input() user: any;

  constructor(private storageService: StorageServiceService, private router: Router) {

  }

  ngOnInit(): void {
  }

  public onEditUser(): void {
    this.storageService.localStorage("user-detail", this.user);
    this.router.navigateByUrl("/home/update-user/" + this.user._id)
  }

}
