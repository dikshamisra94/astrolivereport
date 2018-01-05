import { AstronotificationreportComponent } from './astronotificationreport.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AstronotificationreportComponent,
    data: {
      title: 'Notification Report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronotificationeportRoutingModule {}
