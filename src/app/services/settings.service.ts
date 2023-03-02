import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private cssLink = document.querySelector('#theme');

  constructor() {
    const temaElegido = localStorage.getItem('tema') || './assets/css/colors/red.css';    
    this.cssLink.setAttribute('href', temaElegido);
  }

  changeTheme (theme:string) {
    
    const themeUrl = `./assets/css/colors/${theme}.css`;

    this.cssLink.setAttribute('href', themeUrl);
    localStorage.setItem('tema', themeUrl);

    this.checkActiveTheme();
  }

  checkActiveTheme () {
    const links = document.querySelectorAll('.selector');

    links.forEach(link => {
      link.classList.remove('working');

      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUlr = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.cssLink.getAttribute('href');

      if ( btnThemeUlr === currentTheme ) {
        link.classList.add('working');
      }
    });
  }
}
