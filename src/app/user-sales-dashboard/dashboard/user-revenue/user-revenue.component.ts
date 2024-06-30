import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-revenue',
  templateUrl: './user-revenue.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user-revenue.component.css']
})
export class UserRevenueComponent {

}
