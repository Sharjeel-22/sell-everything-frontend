import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DashboardDataProviderService } from '../../service/dashboard-data-provider.service';
import { BasicData, BasicOptions } from '../interface/AnnuallSalesInterface';

@Component({
  selector: 'app-annuall-sales',
  templateUrl: './annuall-sales.component.html',
  standalone:true,
  imports:[ChartModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./annuall-sales.component.css']
})
export class AnnuallSalesComponent implements OnInit{
  public basicData!: BasicData;
  public basicOptions!: BasicOptions;
  private textColor:WritableSignal<string> = signal<string>("");
  private textColorSecondary: WritableSignal<string> = signal<string>("");
  private surfaceBorder: WritableSignal<string> = signal<string>("");
  
private readonly annuallSalesDetails = inject(DashboardDataProviderService);
  ngOnInit():void {
      this.annualSalesChart();
  }

  public annualSalesChart():void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.textColor.set(documentStyle.getPropertyValue('--text-color'));
    this.textColorSecondary.set(documentStyle.getPropertyValue('--text-color-secondary'));
      this.surfaceBorder.set(documentStyle.getPropertyValue('--surface-border'))
      this.basicDataProvider();
      this.basicOptionProvider(this.textColor(),this.textColorSecondary(),this.surfaceBorder());
  }
  public basicDataProvider():void {
    this.basicData = {
      labels: this.annuallSalesDetails.monthsNameProvider(),
      datasets: [
          {
              label: 'Annual Sales',
              data: this.annuallSalesDetails.dataProvider(),
              backgroundColor: this.annuallSalesDetails.backgroundColorProvider(),
              borderColor: this.annuallSalesDetails.borderColorProvider(),
              borderWidth: 1
          }
      ]
  };
  }
  public basicOptionProvider(textColor:string,textColorSecondary:string,surfaceBorder:string):void {
    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
  };
  }
}
