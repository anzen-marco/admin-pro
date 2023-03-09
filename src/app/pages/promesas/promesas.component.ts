import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.less']
})
export class PromesasComponent  implements OnInit {

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.table(usuarios);
    });

    const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('Resolver');
      } else {
        reject('Erorrrrrrr x_x');
      }
      
      console.log('Soy una promesa n__n');
    });

    promesa.then( (mensaje) => {
      console.log(mensaje);
    })
    .catch(error => {
      console.log('Error en la promesa', error);
    });

    console.log('ngOnInit');
  }

  getUsuarios() {
    return new Promise<void>((resolve, reject) => {
      fetch('https://reqres.in/api/users')
      .then( respuesta => respuesta.json() )
      .then( body => resolve( body.data ));
    })
  }
  
}
