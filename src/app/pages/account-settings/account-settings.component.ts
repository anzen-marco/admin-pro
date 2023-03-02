import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.less']
})
export class AccountSettingsComponent implements OnInit {
  public cssLink = document.querySelector('#theme');
  public links: NodeListOf<Element>;

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkActiveTheme();
  }

  changeTheme (theme:string) {
    
    const themeUrl = `./assets/css/colors/${theme}.css`;

    this.cssLink.setAttribute('href', themeUrl);
    localStorage.setItem('tema', themeUrl);

    this.checkActiveTheme();
  }

  checkActiveTheme () {
    console.log(this.links);

    this.links.forEach(link => {
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
