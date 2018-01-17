import { Averagecallreport } from './../../shared/model/averagecall-data.model';
import { DatePipe } from "@angular/common";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { AveragecallService } from './../../services/averagecall.service';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'averagecallreport.component.html' 
})
export class AveragecallreportComponent implements OnInit {
public averagecallLists:Averagecallreport[] = [];
  loading : boolean = false;
  bsValueStart: Date;
  maxDateStart: Date; 
  bsValueStrStart: string;
  bsDateAPIStrStart: string;

  minDateEnd:Date;
  bsValueEnd: Date;
  maxDateEnd: Date; 
  bsValueStrEnd: string;
  bsDateAPIStrEnd: string;
 
  transformDate(date, format) {
   return this.datePipe.transform(date, format);
 }
  constructor(private averagecallService:AveragecallService,
    private datePipe: DatePipe, private alertService: AlertService
    ) {
      this.maxDateStart = new Date();
      this.maxDateEnd = new Date();
    }
    ngOnInit(){
      this.bsValueStart = new Date();
      this.bsValueStrStart = this.transformDate(this.bsValueStart, 'd/M/y');
      this.bsDateAPIStrStart = this.transformDate(this.bsValueStart, 'yyyy-MM-dd');
      
      this.bsValueEnd = new Date();
      this.bsValueStrEnd = this.transformDate(this.bsValueEnd, 'd/M/y');
      this.bsDateAPIStrEnd = this.transformDate(this.bsValueEnd, 'yyyy-MM-dd');
      
    //  this.getAstronotificationList(this.bsDateAPIStrStart);      
    }
     download() {
    //   this.AstronotificationService.getAstroNotificationReport(startDate).
    //   .subscribe(data => {
    //     this.allItems = data.result.users;  
        var options = { 
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true, 
            showTitle: true,
            headers: ['Name','Average Total Time','Average Free Time','Average Paid Time'] 
        };
        new Angular2Csv(this.averagecallLists, 'Average Call Time Report',options);
    //   }); 
     }
    getAveragecallList(startDate:string,endDate:string){
      this.loading = true;
     this.averagecallService.getAverageCallReport(startDate,endDate).subscribe(      
           data => {
            this.loading = false;
            console.log(data);
             this.averagecallLists = data;
                         
           }, error => {
            
          this.loading = false;
          this.alertService.errorTimedOut('something went wrong!', 3000);
        }
         )
   }
   onChangeStartdate(){
    this.bsValueStrStart = this.transformDate(this.bsValueStart, 'd/M/y');
     this.bsDateAPIStrStart = this.transformDate(this.bsValueStart, 'yyyy-MM-dd');
     this.minDateEnd = this.bsValueStart;
     this.getAveragecallList(this.bsDateAPIStrStart,this.bsDateAPIStrEnd);
   }  
   onChangeEnddate(){
    this.bsValueStrEnd = this.transformDate(this.bsValueEnd, 'd/M/y');
     this.bsDateAPIStrEnd = this.transformDate(this.bsValueEnd, 'yyyy-MM-dd');
     this.getAveragecallList(this.bsDateAPIStrStart, this.bsDateAPIStrEnd);
   }
}
