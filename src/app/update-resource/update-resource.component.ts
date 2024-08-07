import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ResourceService } from '../resourceService/resource.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.css']
})
export class UpdateResourceComponent implements OnInit{
  private readonly servie = inject(ResourceService);
  private readonly storageService = inject(StorageServiceService);
  private readonly router = inject(Router);
  public showImg: boolean = false;
  public ImgStore: string = '';
  public selectedFile:any;
  public form!:FormGroup;
  public resource:any;

  ngOnInit(): void {
    this.syncCurrentResource();
  }

  public syncCurrentResource():void {
    this.resource = this.storageService.getLocalStorage("currentResource");
    this.formValidation();
  }
  
  public formValidation():void {
    this.form = new FormGroup({
      title: new FormControl(this.resource.title,Validators.required),
      description: new FormControl(this.resource.description,Validators.required),
      userId: new FormControl('',Validators.required)
    })
  }
  public onSubmit():void {
    const data = {
      id: this.resource._id,
      title: this.form.value.title || this.resource.title,
      description: this.form.value.description || this.resource.description,
      imageURL: this.resource.imageURL
    }
    this.servie.updateResource(data).subscribe((res:any) => {
      if(res.hasError == false) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Resource Update Successfully...',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          this.router.navigateByUrl("/home/resource-section");
        }, 1000);
      }
    })
  }
  public getImg(img: any) {
    this.ImgStore = URL.createObjectURL(img.target.files[0]);
    this.selectedFile = img.target.files[0];
    this.showImg = true;
  }
}
