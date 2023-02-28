import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent {
  progreso1:number = 15;
  progreso2: number = 30;

  get getProgreso1 () {
    return `${this.progreso1}%`
  }

  get getProgreso2 () {
    return `${this.progreso2}%`;
  }

  cambioDeValor (valor: number) {
    console.log('Estoy cambiando n___n', valor);    
  }
}