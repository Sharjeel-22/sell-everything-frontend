import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

}
