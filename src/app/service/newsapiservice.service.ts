import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
  
  //url
   newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
   techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
   //topheading()
   topHeading():Observable<any>
   {
    return this._http.get(this.newsApiUrl);
   }

   technews():Observable<any>
   {
    return this._http.get(this.techApiUrl);
   }
  }
