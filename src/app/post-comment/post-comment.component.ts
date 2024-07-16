import { Component, inject } from '@angular/core';
import { StorageServiceService } from '../storageService/storage-service.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent {
  private readonly storageService = inject(StorageServiceService);
  private readonly service = inject(ServiceService)
  public comment = "";

  public postComment():void{
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
