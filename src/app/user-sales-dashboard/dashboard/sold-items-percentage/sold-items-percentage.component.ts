import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DashboardDataProviderService } from '../../service/dashboard-data-provider.service';

@Component({
  selector: 'app-sold-items-percentage',
  templateUrl: './sold-items-percentage.component.html',
  standalone:true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  styleUrls: ['./sold-items-percentage.component.css']
})
export class SoldItemsPercentageComponent {
  //dependecy injection
  public readonly dataPointsHelperService = inject(DashboardDataProviderService);

  public chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Sales by Department"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: this.dataPointsHelperService.dataPointsProvider()
	  }]
	}

}
