import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-new-resource-button',
  templateUrl: './add-new-resource-button.component.html',
  imports:[],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-new-resource-button.component.css']
})
export class AddNewResourceButtonComponent {

}
