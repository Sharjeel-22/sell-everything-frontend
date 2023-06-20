import { Component, Input, OnInit } from '@angular/core';
import { ResourceService } from '../resourceService/resource.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.css']
})
export class ResourceCardComponent implements OnInit{
  public resources:any[]=[];
  public postId="";
  public comment:any;
  public userId:any;
  public userRole:string="";
  public tempLoader:boolean[] = [false,false];
  public triggerTempField:boolean[]=[false,false];
  public inputValue:any;
  public searchText:any;
  public noResultsFound: boolean = false;

  constructor(
    private resourceService:ResourceService,
    private storageService:StorageServiceService,
    private service:ServiceService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.getAllResources();
  }

  public syncUserInfo():void {
    this.userId = this.storageService.getLocalStorage("currentUser");
    this.userRole = this.storageService.getSession("userRole");
  }
  public getAllResources():void {
    let token = this.storageService.getSession("token");
    this.resourceService.getAllResouces(token).subscribe((res:any) => {
      this.resources = [...res.results]
    })
    setTimeout(() => {
      this.syncUserInfo();
    },1000)
  }
  public postComment(id:any,comment:any):void{
    this.tempLoader[id]=!this.tempLoader[id];
    let token = this.storageService.getSession("token");
    let userId = this.storageService.getLocalStorage("currentUser");
    this.service.findUserById(userId).subscribe((res:any) => {
      let user = {
        userId:userId,
        userName:res?.result?.firstName + " " + res?.result?.lastName,
        imageURL:res?.result?.imageURL,
        comment: comment.value,
        id:id
      }
      this.resourceService.postComment(user,token).subscribe((res:any) => {
        if(!res.hasError) {
          setTimeout(() => {
            this.getAllResources();
            this.tempLoader[id] = false;
          },1000)
        }
        comment.value = "";
      })
    })
  }
  public openModalForComments(id:string,postId:string,comment:string,index:any):void {
    Swal.fire({
      title: 'Do you want to changes enything in comments?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Edit Comment',
      denyButtonText: `Delete Comment`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.triggerTempField[index] = !this.triggerTempField[index];
        this.resources.forEach((res:any) => {
          res?.comments?.forEach((comment:any,i:number) => {
            if(index == i) {
              this.triggerEditPopUp(comment,postId);
            }
          })
        })

      } else if (result.isDenied) {
        this.resources.forEach((res:any) => {
          res?.comments?.forEach((comment:any) => {
            if(comment._id == id) {
              this.deleteComment(comment._id,postId);
            }
          })
        })
      }
    })
    
  }
  public deleteComment(id:string,postId:string):void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let token = this.storageService.getSession("token");
        let data ={
          postId:postId,
          id: id
        }
        this.resourceService.deleteComment(data,token).subscribe((res:any) => {
          if(res.hasError == false) {
            Swal.fire(
              'Deleted!',
              'Your post has been deleted.',
              'success'
            )
            setTimeout(() => {
              this.getAllResources();
            },1000)
          }
        });
      }
    })
  }
  public onEditComment(data:any):void {
    let token = this.storageService.getSession("token");
    this.resourceService.updateResourceComment(data,token).subscribe((res:any) => {
      if(res.hasError == false) {
        this.getAllResources();
      }
    })
  }
  public onEditPost():void {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  public onDeletePost():void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let resource = this.storageService.getLocalStorage("currentResource");
        let token = this.storageService.getSession("token");
        this.resourceService.deleteResource(resource._id,token).subscribe((res:any) => {
          if(res.hasError == false) {
            Swal.fire(
              'Deleted!',
              'Your post has been deleted.',
              'success'
            )
            window.location.reload();
          }
        });
      }
    })
  }
  public openModal(id:any):void {
    let resource;
    this.resources.forEach((res:any) => {
      if(res._id == id){
        resource = res;
          this.storageService.localStorage("currentResource",resource);
          Swal.fire({
            title: 'Do you want to changes enything?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Edit',
            denyButtonText: `Delete Post`,
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl("/home/update-resource");
            } else if (result.isDenied) {
              this.onDeletePost();
            }
          })
      }
    });
  }
  public triggerEditPopUp(comment:any,postId:string):void {
    Swal.fire({
      title: 'Update Your Comment',
      input: 'text',
      inputValue: `${comment.comment}`,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Update Comment',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        const inputValue = result.value;
        let data = {
          id:comment._id,
          comment:inputValue,
          postId:postId
        }
        this.onEditComment(data);
      }
    });
  }
}
