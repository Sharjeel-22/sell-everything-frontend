import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AnnuallSalesComponent } from '../annuall-sales/annuall-sales.component';
import { ItemSellingRatioComponent } from '../item-selling-ratio/item-selling-ratio.component';
import { SoldItemsPercentageComponent } from '../sold-items-percentage/sold-items-percentage.component';
import { UserRevenueComponent } from '../user-revenue/user-revenue.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone:true,
  imports:[
    CardModule,
    TabViewModule,
    AnnuallSalesComponent,
    ItemSellingRatioComponent,
    SoldItemsPercentageComponent,
    UserRevenueComponent
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
