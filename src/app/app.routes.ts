import { CassaComponent } from './states/cassa/cassa.component';
import { IlMioControComponent } from './states/il-mio-contro/il-mio-contro.component';
import { ListaScomesseComponent } from './states/lista-scomesse/lista-scomesse.component';
import { MessagiComponent } from './states/messagi/messagi.component';
import { PdrComponent } from './states/pdr/pdr.component';
import { ReportComponent } from './states/report/report.component';
export const States = [
  {
    path: '',
    component: CassaComponent
  },
  {
    path: 'cassa',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'il_mio_conto',
    component: IlMioControComponent
  },
  {
    path: 'pdr',
    component: PdrComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'lista_scomesse',
    component: ListaScomesseComponent
  },
  {
    path: 'messaggi',
    component: MessagiComponent
  }
];
