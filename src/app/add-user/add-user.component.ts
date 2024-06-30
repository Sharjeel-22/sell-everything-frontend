import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

}
