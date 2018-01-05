import { AstronotificationeportRoutingModule } from './astronotificationreport-routing.module';
import { AstronotificationreportComponent } from './astronotificationreport.component';
import { AlertModule } from './../../alert/alert.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AstronotificationeportRoutingModule,
    BsDatepickerModule.forRoot(),
    AlertModule
  ],
  declarations: [ AstronotificationreportComponent ],
  
})  
export class AstronotificationreportModule { }
