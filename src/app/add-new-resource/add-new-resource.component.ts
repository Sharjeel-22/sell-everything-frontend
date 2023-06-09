import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ResourceService } from '../resourceService/resource.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-resource',
  templateUrl: './add-new-resource.component.html',
  styleUrls: ['./add-new-resource.component.css']
})
export class AddNewResourceComponent implements OnInit{
  public showImg: boolean = false;
  public ImgStore: string = '';
  public selectedFile:any;
  public form!:FormGroup;

  constructor(private servie:ResourceService,private storageService:StorageServiceService,private router:Router){}

  ngOnInit(): void {
    this.formValidation();
  }
  
  public formValidation():void {
    this.form = new FormGroup({
      imageURL: new FormControl('',[Validators.required]),
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      userId: new FormControl('',Validators.required)
    })
  }
  public onSubmit():void {
    let currentUserId = this.storageService.getLocalStorage("currentUser");
    const resouceDetail = {
      title: this.form.value.title,
      description: this.form.value.description,
      userId: currentUserId
    }
    let formData = new FormData();
    formData.append("imageURL",this.selectedFile);
    formData.append("resourceDetail",JSON.stringify(resouceDetail));
    let token = this.storageService.getSession("token");
    this.servie.addResouce(formData,token).subscribe((res:any) => {
      console.log("Check Response :: ",res);
      if(res.hasError == false) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Resource Add Successfully...',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/home/resource-section");
      }
    })
  }
  public getImg(img: any) {
    this.ImgStore = URL.createObjectURL(img.target.files[0]);
    this.selectedFile = img.target.files[0];
    this.showImg = true;
  }

}
