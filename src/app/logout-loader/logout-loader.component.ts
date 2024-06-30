import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logout-loader',
  templateUrl: './logout-loader.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./logout-loader.component.css']
})
export class LogoutLoaderComponent {

}
