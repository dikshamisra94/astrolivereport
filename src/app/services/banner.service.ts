import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class BannerService {

  private baseURL = environment.baseBZURI;
  private getBannerListURL = this.baseURL + '/bannerList';
  constructor(private http :Http) { }
  getBannerList(){
    
    return this.http.get(this.getBannerListURL)
    .map((response:Response) => {
     let data = response.json();
      return data;
    }).catch((error:any) => Observable.throw(error.json().error || 'server error'));
     
   }

}
