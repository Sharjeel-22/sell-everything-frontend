import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DashboardDataProviderService } from '../../service/dashboard-data-provider.service';
import { BasicOptions } from '../interface/AnnuallSalesInterface';
import { ItemSellingRatioChartData } from '../interface/ItemSellingRatioInterface';
@Component({
  selector: 'app-item-selling-ratio',
  templateUrl: './item-selling-ratio.component.html',
  standalone:true,
  imports: [ChartModule],
  styleUrls: ['./item-selling-ratio.component.css']
})
export class ItemSellingRatioComponent {
  public data!:ItemSellingRatioChartData;
  public options!: BasicOptions;
  private textColor:WritableSignal<string> = signal<string>("");
  private textColorSecondary: WritableSignal<string> = signal<string>("");
  private surfaceBorder: WritableSignal<string> = signal<string>("");
  private borderColorProvider:WritableSignal<string> = signal<string>("");
  private readonly dataProviderService = inject(DashboardDataProviderService);

  ngOnInit() {
      this.itemSellingRatioChart();
  }
  public itemSellingRatioChart():void {
    const documentStyle = getComputedStyle(document.documentElement);
    this.textColor.set(documentStyle.getPropertyValue('--text-color'));
    this.textColorSecondary.set(documentStyle.getPropertyValue('--text-color-secondary'));
    this.surfaceBorder.set(documentStyle.getPropertyValue('--surface-border'))
    this.borderColorProvider.set(documentStyle.getPropertyValue('--blue-500'));

    this.basicDataProvider();
    this.basicOptionProvider(this.textColor(),this.textColorSecondary(),this.surfaceBorder());
  }
  public basicDataProvider():void {
    this.data = {
      labels: this.dataProviderService.monthsNameProvider(),
      datasets: [
          {
              label: 'Dataset 1',
              fill: false,
              borderColor: "",
              yAxisID: 'y',
              tension: 0.4,
              data: this.dataProviderService.itemSellingRatio()
          }
      ]
  };
  }
  public basicOptionProvider(textColor:string,textColorSecondary:string,surfaceBorder:string):void {
    this.options = {
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
