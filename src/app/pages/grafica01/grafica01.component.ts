import { Component } from '@angular/core';

import { ChartData, ChartEvent, ChartType, Colors } from 'chart.js';

@Component({
  selector: 'app-grafica01',
  templateUrl: './grafica01.component.html',
  styleUrls: ['./grafica01.component.less']
})
export class Grafica01Component {
  public etiquetas1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  public data1: number[]= [
    350, 450, 100 
  ];

  
}
