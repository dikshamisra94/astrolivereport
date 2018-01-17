import { AveragecallreportComponent } from './averagecallreport.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AveragecallreportComponent,
    data: {
      title: 'Average Call Time Report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AveragecallreportRoutingModule {}
