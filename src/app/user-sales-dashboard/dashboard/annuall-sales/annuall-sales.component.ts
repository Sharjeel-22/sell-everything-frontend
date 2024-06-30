import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-annuall-sales',
  templateUrl: './annuall-sales.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./annuall-sales.component.css']
})
export class AnnuallSalesComponent {

}
