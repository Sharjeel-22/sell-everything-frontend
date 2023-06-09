import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resourceService/resource.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit{

  public comment = "";
  constructor(private resourceService:ResourceService,private storageService:StorageServiceService,private service:ServiceService){}

  ngOnInit(): void {
    
  }

  public postComment():void{
    let token = this.storageService.getSession("token");
    let userId = this.storageService.getLocalStorage("currentUser");
    this.service.findUserById(userId).subscribe((res:any) => {
      if(res.result.length > 1){
        let user = {
          userId:userId,
          userName:res?.result?.firstName + " " + res?.result?.lastName,
          imageURL:res?.result?.imageURL,
          comment: this.comment,
        }
      }
    })
  }
}
