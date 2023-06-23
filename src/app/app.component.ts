import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';
import { StorageServiceService } from './storageService/storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private service: ServiceService, private storageService: StorageServiceService) { }


  ngOnInit(): void {
    let role = this.storageService.getSession("userRole");
          if(!role){
          this.service.changeStatus$.next(false);
          }else {
            this.service.changeStatus$.next(true);
          }
  }
}
