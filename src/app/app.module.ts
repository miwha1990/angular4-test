import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MySidebarComponent } from './my-sidebar/my-sidebar.component';

import {TabsComponent} from './tabs/tabs';
import {TabComponent} from './tabs/tab';
import { CassaComponent } from './states/cassa/cassa.component';
import { IlMioControComponent } from './states/il-mio-contro/il-mio-contro.component';
import { PdrComponent } from './states/pdr/pdr.component';
import { ReportComponent } from './states/report/report.component';
import { ListaScomesseComponent } from './states/lista-scomesse/lista-scomesse.component';
import { MessagiComponent } from './states/messagi/messagi.component';
import { States } from './app.routes';

import { TabsService } from './tabs.service';

@NgModule({
  declarations: [
    AppComponent,
    MySidebarComponent,
    TabsComponent,
    TabComponent,
    CassaComponent,
    IlMioControComponent,
    PdrComponent,
    ReportComponent,
    ListaScomesseComponent,
    MessagiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(States)
  ],
  providers: [TabsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
