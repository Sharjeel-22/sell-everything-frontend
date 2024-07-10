import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { AdminService } from '../adminService/admin.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ResourceService } from '../resourceService/resource.service';
import { StateService } from '../core/state/state.service';
interface Comment {
  comment: string;
  status: string;
  userId: string;
  userImageURL: string;
  userName: string;
  _id: string;
}

interface ResponseObject {
  comments: Comment[];
  createdAt: string;
  description: string;
  imageURL: string;
  status: string;
  title: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
}

@Component({
  selector: 'app-resource-item-list',
  templateUrl: './resource-item-list.component.html',
  styleUrls: ['./resource-item-list.component.css']
})
export class ResourceItemListComponent implements OnInit {
  public resources: any[]=[];
  public resourcesProvider: WritableSignal<ResponseObject[]> = signal<ResponseObject[]>([]);
  public loading: WritableSignal<boolean> = signal<boolean>(false);
  public displayItemCount = 5;
  public showAllItems = false;
  public searchText:any;

  constructor(
    private resouceService: ResourceService,
    private storageService: StorageServiceService,
    private router: Router,
    private readonly stateService:StateService
  ) { 

    effect(() => {
      if(!this.stateService.loading()){
        this.resourcesProvider.set(this.stateService.resourceList())
        this.loading.set(this.stateService.loading());
        console.log("After set signal value :: ",this.resourcesProvider())
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
      console.log("Check :: ",this.resources);
      const itemCount = this.showAllItems ? this.resources?.length : this.displayItemCount;
      this.resources = this.resources.slice(0, itemCount);
    })
    this.storageService.deleteLocalStorage("resource");
  }
  public deleteResouce(userId: any, index: number): void {
    this.resources.forEach((res: any) => {
      if (res._id === userId) {
        this.resouceService.deleteResource(res._id).subscribe((res: any) => {
          console.log("Check :: ", res);
        })
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
