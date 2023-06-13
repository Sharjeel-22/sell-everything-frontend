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
  public isAdmin: boolean = false;
  public isLogin: boolean = false;

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
      this.cleareStorage();
      this.router.navigateByUrl("/user-login");
      this.showItems = false;
    }, 2000);
  }

  public showSpacificItems():void {
      this.service.changeStatus$.subscribe((res:any) => {
        console.log("ssss",res)
        if(res) {
          let role = this.storageService.getSession("userRole");
          this.isAdmin = role == "admin" ? true : false;
          this.isLogin = true;
        }else {
          this.isLogin = false;
        }
      })
  }
  public cleareStorage():void {
    this.isLogin = false;
    this.isAdmin = false;
  }
}
