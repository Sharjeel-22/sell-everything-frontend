import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../adminService/admin.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  public showImg: boolean = false;
  public ImgStore: string = '';
  public form!: FormGroup;
  public selectedFile: any;
  public user = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    imageURL: ""
  };

  constructor(private adminService: AdminService, private storageService: StorageServiceService, private router: Router) { }
  ngOnInit(): void {
    this.formValidation();
  }

  public formValidation(): void {
    let data = this.storageService.getLocalStorage("userDetail");
    this.user.firstName = data.firstName;
    this.user.lastName = data.lastName;
    this.user.imageURL = data.imageURL;
    this.user.password = data.password;
    this.user.email = data.email;
    this.user.id = data._id;
    this.form = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      password: new FormControl(this.user.password ? this.user.password : '', [Validators.required, Validators.maxLength(14), Validators.minLength(8)]),
      imageURL: new FormControl(""),
    })

    if (data.imageURL) {
      this.showImg = false;
    }
  }

  public onSubmit(): void {
    const userDetail = {
      id: this.user.id,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.adminService.editUser(userDetail).subscribe((res: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User Update Successfully...',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        this.router.navigateByUrl("/home/admin-section");
      }, 1000);
      console.log("Check :: ", res);
    })
  }
  public getImg(img: any) {
    this.ImgStore = URL.createObjectURL(img.target.files[0]);
    this.selectedFile = img.target.files[0];
    this.showImg = true;
  }
}
