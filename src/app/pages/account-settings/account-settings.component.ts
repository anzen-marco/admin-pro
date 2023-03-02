import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.less']
})
export class AccountSettingsComponent implements OnInit {

  constructor ( private settingsService: SettingsService ) {
  }

  ngOnInit(): void {
    this.settingsService.checkActiveTheme();
  }

  changeTheme (theme:string) {    
    this.settingsService.changeTheme(theme);
  }

}
