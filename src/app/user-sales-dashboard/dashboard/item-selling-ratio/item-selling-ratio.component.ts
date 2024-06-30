import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-item-selling-ratio',
  templateUrl: './item-selling-ratio.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./item-selling-ratio.component.css']
})
export class ItemSellingRatioComponent {

}
