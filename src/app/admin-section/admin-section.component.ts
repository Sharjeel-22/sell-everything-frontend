import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminService/admin.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit{
  public users:any[]=[];
  public displayItemCount = 5;
  public showAllItems = false;

  constructor(
    private adminService:AdminService,
    private storageService:StorageServiceService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.getAllUsers();
  }

 public getAllUsers():void {
    this.adminService.getAllUsers().subscribe((res:any) => {
      this.users = [...res.results];
      const itemCount = this.showAllItems ? this.users?.length : this.displayItemCount;
      this.users = this.users.slice(0,itemCount);
    })
    this.storageService.deleteLocalStorage("userDetail");
  }
  public deleteUser(userId:any,index:number):void {
    this.users.forEach((res:any) => {
      if(res._id === userId){
        this.adminService.deleteUserById(userId).subscribe((res:any) => {
          console.log("Check :: ",res);
        })
      }
    })
    this.users = this.users.filter((res:any) => res._id !== userId);
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
