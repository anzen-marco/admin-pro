import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard ',
      icono: 'mdi mdi-gauge',

      submenu: [
        {
          titulo: 'Principal', url: '/',
        },
        {
          titulo: 'Progress Bar', url: 'progress',
        },
        {
          titulo: 'Gráfica 01', url: 'grafica01',
        },
        {
          titulo: 'Promesas', url: 'promesas',
        },
        {
          titulo: 'Rxjs', url: 'rxjs',
        }
      ]
    }
  ]

  constructor() { }
}
