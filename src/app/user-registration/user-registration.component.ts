import { Component,inject,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  private readonly service = inject(ServiceService);
  private readonly router  = inject(Router);
  public showImg: boolean = false;
  public ImgStore: string = '';
  public form!: FormGroup;
  public selectedFile:any;
  
  ngOnInit(): void {
    this.formValidation();
  }

  public formValidation():void {
    this.form = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.maxLength(14),Validators.minLength(8)]),
      imageURL: new FormControl(this.ImgStore)
    })
  }

  public onSubmit(): void {
    const userDetail = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password
    }
    let formData = new FormData();
    formData.set('imageURL',this.selectedFile);
    formData.append('data',JSON.stringify(userDetail))
    this.service.registration(formData).subscribe((res:any) => {
      setTimeout(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You Register Successfully...',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/user-login");
      }, 2000);
    });
  }
  public getImg(img: any) {
    this.ImgStore = URL.createObjectURL(img.target.files[0]);
    this.selectedFile = img.target.files[0];
    this.showImg = true;
  }
}
