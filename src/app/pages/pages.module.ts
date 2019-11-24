
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

//ng2-carts
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent
      ],
      exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
      ],

      imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
      ]
    })
    export class PagesModule { }