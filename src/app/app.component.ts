import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceService } from './service/service.service';
import { StorageServiceService } from './storageService/storage-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports:[HeaderComponent,FooterComponent,HomeComponent,NgIf],
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
