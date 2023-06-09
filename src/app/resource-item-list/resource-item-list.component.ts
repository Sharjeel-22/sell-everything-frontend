import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminService/admin.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ResourceService } from '../resourceService/resource.service';

@Component({
  selector: 'app-resource-item-list',
  templateUrl: './resource-item-list.component.html',
  styleUrls: ['./resource-item-list.component.css']
})
export class ResourceItemListComponent implements OnInit {
  public resources:any[]=[];
  public displayItemCount = 5;
  public showAllItems = false;

  constructor(
    private resouceService:ResourceService,
    private storageService:StorageServiceService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.getAllUsers();
  }

 public getAllUsers():void {
  let token = this.storageService.getSession("token");
    this.resouceService.getAllResouces(token).subscribe((res:any) => {
      this.resources = [...res.results];
      const itemCount = this.showAllItems ? this.resources?.length : this.displayItemCount;
      this.resources = this.resources.slice(0,itemCount);
      console.log("Check :: users :: ",this.resources.length)
    })
    this.storageService.deleteLocalStorage("userDetail");
  }
  public deleteResouce(userId:any,index:number):void {
    this.resources.forEach((res:any) => {
      if(res._id === userId){
        let token = this.storageService.getSession("token");
        this.resouceService.deleteResource(res._id,token).subscribe((res:any) => {
          console.log("Check :: ",res);
        })
      }
    })
    this.resources = this.resources.filter((res:any) => res._id !== userId);
  }
  public onEditUser(user:any):void {
    this.storageService.localStorage("userDetail",user);
    this.router.navigateByUrl("/home/update-user-detail/"+user._id);
  }

  public loadAllUsers():void {
    this.showAllItems = true;
    this.getAllUsers();
  }
  public lessShowUsers():void {
    this.showAllItems = false;
    this.getAllUsers();
  }
}
