import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Colors } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.less']
})
export class DonaComponent {

  @Input('titulo') titulo: string = 'Sin título';
  @Input('etiquetas') doughnutChartLabels: string [] = [];
  @Input('data') dataDonut: number[] = [];
  @Input('bgColor') backgroundColorDonut: string [] = [];

  constructor () {
    this.doughnutChartLabels = ['Sin etiqueta'];
    this.dataDonut = [100];
    this.backgroundColorDonut = ['#6857e6', '#009fee', '#f02059'];
  }

  ngOnInit(): void {
    this.doughnutChartData.labels = this.doughnutChartLabels;
    this.doughnutChartData.datasets[0].data = this.dataDonut;
    this.doughnutChartData.datasets[0].backgroundColor = this.backgroundColorDonut;
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.dataDonut,
        backgroundColor: this.backgroundColorDonut
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
}
