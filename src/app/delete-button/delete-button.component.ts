import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {

}
