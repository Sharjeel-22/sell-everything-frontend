import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userData = {
    id:"",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    token: "",
    status: "",
    imageURL: ""
  };
  public loader: boolean = false;

  constructor(private storageService: StorageServiceService, private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.verifyLoginUser();
  }
  public getCurrentUser(): void {
    let currentUserId = this.storageService.getLocalStorage("currentUser");
    this.service.findUserById(currentUserId).subscribe((res: any) => {
      console.log(res);
      this.userData = {
        ...res.result
      }
    })
  }
  public logOut(): void {
    this.loader = true;
    this.storageService.deleteSession("token");
    setTimeout(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You Logout Successfully...',
        showConfirmButton: false,
        timer: 1500
      })
      this.loader = false;
      this.service.changeStatus$.next(false);
      this.router.navigateByUrl("/user-login");
    }, 2000);
  }
  public verifyLoginUser(): void {
    const token = this.storageService.getSession("token");
    if (!token) {
      this.router.navigateByUrl("/user-login");
    }
  }
  UpdatePass(userData: any) {
    this.router.navigate(["/home/update-passowrd", userData._id])
  }

  public deleteAccount(): void {
    let currentUserId = this.storageService.getLocalStorage("currentUser");
    this.service.deleteAccount(currentUserId).subscribe((res:any) => {
      console.log("Check Account Status :: ",res);
      if(res.hasError == false) {
        setTimeout(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Account Deleted Successfully...',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl("/user-login");
        }, 2000);
      }
    })
  }
}
