import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cambiarcolor(tema: string , link: any) {
    
    console.log(link);
    const url = `assets/css/colors/${tema}.css`;
    document.getElementById('tema').setAttribute('href', url);

  }

}
