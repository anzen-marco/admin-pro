import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  menuItems: any[];

  constructor (private sidebarService: SidebarService){
    this.menuItems = sidebarService.menu;
  }
}
