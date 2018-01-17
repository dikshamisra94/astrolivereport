import { AveragecallreportRoutingModule } from './averagecallreport-routing.module';
import { AveragecallreportComponent } from './averagecallreport.component';
import { AlertModule } from './../../alert/alert.module';
import { DataTableModule } from "angular2-datatable";


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AveragecallreportRoutingModule,
    BsDatepickerModule.forRoot(),
    AlertModule,
    DataTableModule
  ],
  declarations: [ AveragecallreportComponent ],
  
})  
export class AveragecallreportModule { }
