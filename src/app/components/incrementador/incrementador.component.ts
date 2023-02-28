import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.less']
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorDeSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor ( valor: number ) {
   
    if (this.progreso >= 100 && valor >= 0) {
      this.valorDeSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorDeSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorDeSalida.emit(this.progreso);
  }

  alCambiar (valor: number) {
    if (valor >= 100) {
      this.progreso = 100;
    } else if (valor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.valorDeSalida.emit(this.progreso);
  }

}
