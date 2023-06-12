import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public showItems: boolean = false;
  public permission: boolean = false;
  public showAdmin: boolean = false;
  public showUser: boolean = false;

  constructor(private storageService:StorageServiceService,private service:ServiceService,private router:Router){}

  ngOnInit(): void {
    this.showSpacificItems();
  }
  public logOut():void {
    this.storageService.deleteSession("token");
    setTimeout(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You Logout Successfully...',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl("/user-login");
      this.showItems = false;
    }, 2000);
  }

  public showSpacificItems():void {
    let role = this.storageService.getSession("userRole");
    if(!role) {
      this.showAdmin = false;
      this.showUser = false;
    }
    this.service.changeStatus$.subscribe((res:boolean) => {
      this.showItems = res;
    })
      this.service.changeStatus$.subscribe((res:any) => {
        if(res == "admin") {
          this.showAdmin = true;
          this.showUser = false;
        }
        if(res == "user") {
          this.showUser = true;
          this.showAdmin = false;
        }
      })
  }
}
