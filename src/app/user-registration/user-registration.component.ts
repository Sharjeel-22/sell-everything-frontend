import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DeviceInformationService } from '../service/device-information.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  private readonly service = inject(ServiceService);
  private readonly router  = inject(Router);
  private readonly deviceInfoService = inject(DeviceInformationService);
  public showImg: boolean = false;
  public ImgStore: string = '';
  public form!: FormGroup;
  public selectedFile: any;

  ngOnInit(): void {
    this.formValidation();
    this.getLocation();
  }

  public formValidation(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(8)]),
      imageURL: new FormControl(this.ImgStore)
    });
  }
  private location: any = {};
  private deviceInfo: any = {};
  private getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.deviceInfoService.getDeviceInfo().subscribe(info => {
          this.deviceInfo = info;
        }, error => {
          console.error("Error fetching device info: ", error);
        });
      }, error => {
        console.error("Geolocation error: ", error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  public onSubmit(): void {
    debugger
    const userDetail = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      location: this.location,
      deviceInfo: this.deviceInfo
    };

    // Get device information
    const deviceInfo = this.deviceInfoService.getDeviceInfo();
    console.log(deviceInfo);

    let formData = new FormData();
    formData.set('imageURL', this.selectedFile);
    formData.append('data', JSON.stringify({ ...userDetail, deviceInfo }));

    this.service.registration(formData).subscribe((res: any) => {
      setTimeout(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You Register Successfully...',
          showConfirmButton: false,
          timer: 1500
        });
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
