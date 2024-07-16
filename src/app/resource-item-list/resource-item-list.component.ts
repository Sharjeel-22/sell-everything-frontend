import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { AdminService } from '../adminService/admin.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ResourceService } from '../resourceService/resource.service';
import { StateService } from '../core/state/state.service';
import { RESOURCE } from '../core/interfaces/ResourceInterface';


@Component({
  selector: 'app-resource-item-list',
  templateUrl: './resource-item-list.component.html',
  styleUrls: ['./resource-item-list.component.css']
})
export class ResourceItemListComponent implements OnInit {
  private readonly resouceService = inject(ResourceService);
  private storageService = inject(StorageServiceService);
  private readonly router =  inject(Router);
  private readonly stateService = inject(StateService);

  public resources: any[]=[];
  public resourcesProvider: WritableSignal<RESOURCE[]> = signal<RESOURCE[]>([]);
  public loading: WritableSignal<boolean> = signal<boolean>(false);
  public displayItemCount = 5;
  public showAllItems = false;
  public searchText:any;

  constructor() { 

    effect(() => {
      if(!this.stateService.loading()){
        this.resourcesProvider.set(this.stateService.resourceList())
        this.loading.set(this.stateService.loading());
      }else {
        this.loading.set(this.stateService.loading());
      }
    },{allowSignalWrites:true})
  }

  ngOnInit(): void {
    this.getAllResource();
  }

  public getAllResource(): void {
    this.resouceService.getAllResouces().subscribe((res: any) => {
      this.resources = [...res.results];
      const itemCount = this.showAllItems ? this.resources?.length : this.displayItemCount;
      this.resources = this.resources.slice(0, itemCount);
    })
    this.storageService.deleteLocalStorage("resource");
  }
  public deleteResouce(userId: any, index: number): void {
    this.resources.forEach((res: any) => {
      if (res._id === userId) {
        this.resouceService.deleteResource(res._id).subscribe();
      }
    })
    this.resources = this.resources.filter((res: any) => res._id !== userId);
  }
  public onEditResource(resource: any): void {
    this.storageService.localStorage("resource", resource);
    this.router.navigateByUrl("/home/update-resource/" + resource._id);
  }

  public loadAllResources(): void {
    this.showAllItems = true;
    this.getAllResource();
  }
  public lessShowResources(): void {
    this.showAllItems = false;
    this.getAllResource();
  }
}
