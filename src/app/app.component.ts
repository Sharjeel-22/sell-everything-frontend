import { Component, inject } from '@angular/core';
import { ServiceService } from './service/service.service';
import { StorageServiceService } from './storageService/storage-service.service';
import { StateService } from './core/state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = "frontend"
  private readonly service = inject(ServiceService);
  private readonly storageService = inject(StorageServiceService);
  private readonly stateService = inject(StateService);

  ngOnInit(): void {
    let role = this.storageService.getSession("userRole");
          if(!role){
          this.service.changeStatus$.next(false);
          }else {
            this.service.changeStatus$.next(true);
            this.stateService.loadAllResource();
          }
  }
}
