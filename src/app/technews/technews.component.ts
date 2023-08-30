import { Component } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {
  constructor(private _services: NewsapiserviceService) { }

  technewsDispaly:any=[];
  ngOnInit(): void
  {
    this._services.technews().subscribe((result)=>
    {
            this.technewsDispaly=result.articles;
    });
  }

}

