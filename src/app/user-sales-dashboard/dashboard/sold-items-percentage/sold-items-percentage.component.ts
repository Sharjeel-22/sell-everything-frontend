import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sold-items-percentage',
  templateUrl: './sold-items-percentage.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sold-items-percentage.component.css']
})
export class SoldItemsPercentageComponent {

}
