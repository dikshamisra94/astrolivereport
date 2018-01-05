import { Astronotificationreport } from './../../shared/model/astronotification-data.model';
import { AstronotificationService } from './../../services/astronotification.service';
import { AlertService } from './../../services/alert.service';


import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  templateUrl: 'astronotificationreport.component.html'
})
export class AstronotificationreportComponent implements OnInit {
  public astronotificationReportLists:Astronotificationreport[] = [];
  loading : boolean = false;;
  bsValueStart: Date;
  maxDateStart: Date; 
  bsValueStrStart: string;
  bsDateAPIStrStart: string;

  //minDateEnd:Date;
  //bsValueEnd: Date;
  //maxDateEnd: Date; 
  //bsValueStrEnd: string;
  //bsDateAPIStrEnd: string;
 
  transformDate(date, format) {
   return this.datePipe.transform(date, format);
 }
  constructor(private astronotificationService:AstronotificationService,
    private datePipe: DatePipe, private alertService: AlertService
    ) {
      this.maxDateStart = new Date();
      //this.maxDateEnd = new Date();
    }
    ngOnInit(){
      this.bsValueStart = new Date();
      this.bsValueStrStart = this.transformDate(this.bsValueStart, 'd/M/y');
      this.bsDateAPIStrStart = this.transformDate(this.bsValueStart, 'y-M-d');
      
      //this.bsValueEnd = new Date();
      //this.bsValueStrEnd = this.transformDate(this.bsValueEnd, 'd/M/y');
      //this.bsDateAPIStrEnd = this.transformDate(this.bsValueEnd, 'y-M-d');
      
    //  this.getAstronotificationList(this.bsDateAPIStrStart);      
    }
    
    getAstronotificationList(startDate:string){
      this.loading = true;
     this.astronotificationService.getAstroNotificationReport(startDate).subscribe(      
           data => {
            this.loading = false;
            console.log(data);
             this.astronotificationReportLists = data;
                         
           }, error => {
            
          this.loading = false;
          this.alertService.errorTimedOut('something went wrong!', 3000);
        }
         )
   }
   onChangeStartdate(){
    this.bsValueStrStart = this.transformDate(this.bsValueStart, 'd/M/y');
     this.bsDateAPIStrStart = this.transformDate(this.bsValueStart, 'y-M-d');
    // this.minDateEnd = this.bsValueStart;
     this.getAstronotificationList(this.bsDateAPIStrStart);
   }  
}
