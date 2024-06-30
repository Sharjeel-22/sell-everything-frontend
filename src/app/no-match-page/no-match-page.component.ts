import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-match-page',
  templateUrl: './no-match-page.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./no-match-page.component.css']
})
export class NoMatchPageComponent {

}
