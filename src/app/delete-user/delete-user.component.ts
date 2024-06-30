import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

}
