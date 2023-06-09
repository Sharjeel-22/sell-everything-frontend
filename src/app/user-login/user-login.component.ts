import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { StorageServiceService } from '../storageService/storage-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form!: FormGroup;
  loader: boolean = false;
  constructor(private service: ServiceService, private router: Router, private storageService: StorageServiceService) { }
  ngOnInit(): void {
    this.formValidation();
  }

  public formValidation(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
    this.storageService.deleteSession("userRole")
  }

  public onLogin(): void {
    const data = {
      email: this.form.value.email,
      password: this.form.value.passowrd
    };
    this.loader = true;
    this.service.userLogin(data).subscribe((res: any) => {
      if (res.hasError == false) {
        this.storageService.localStorage("currentUser", res.user._id);
        this.storageService.setSession("token",res.user.token);
        this.storageService.setSession("userRole",res.user.role);
        console.log("Check Role :: ",res.user.role)
        setTimeout(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You Login Successfully...',
            showConfirmButton: false,
            timer: 1500
          })
          this.loader = false;
          this.service.changeStatus$.next(true);
          this.router.navigateByUrl("/home/user-profile");
        }, 3000)
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="/user-registration">Please Register Your Self Then Try To Login?</a>'
        })
        this.loader = false;
      }
    })
  }
}
