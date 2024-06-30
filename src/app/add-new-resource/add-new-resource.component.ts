import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageServiceService } from '../storageService/storage-service.service';
import { Router } from '@angular/router';
import { ResourceService } from '../resourceService/resource.service';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-new-resource',
  templateUrl: './add-new-resource.component.html',
  imports:[NgIf,ReactiveFormsModule],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-new-resource.component.css']
})
export class AddNewResourceComponent implements OnInit{
  public showImg: boolean = false;
  public ImgStore: string = '';
  public selectedFile:any;
  public form!:FormGroup;
  public progressBar:WritableSignal<number>=signal<number>(0);

  constructor(private service:ResourceService,private storageService:StorageServiceService,private router:Router){
    effect(() => {
      this.progressBar.set(this.service.progressProvider());
    },{allowSignalWrites:true})
  }
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
    this.service.progressProvider.set(1);
    let formData = new FormData();
    formData.append("imageURL",this.selectedFile);
    formData.append("resourceDetail",JSON.stringify(resouceDetail));
    this.service.addResource(formData).subscribe(
      (res: any) => {
        if (res && res.hasError === false) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Resource Add Successfully...',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("/home/resource-section");
        }
      },
      (err: any) => {
        console.error("Error occurred: ", err);
      }
    );
  }
  public getImg(img: any) {
    this.ImgStore = URL.createObjectURL(img.target.files[0]);
    this.selectedFile = img.target.files[0];
    this.showImg = true;
  }

}
