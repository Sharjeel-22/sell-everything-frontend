import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comment-loader',
  templateUrl: './comment-loader.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./comment-loader.component.css']
})
export class CommentLoaderComponent {

}
