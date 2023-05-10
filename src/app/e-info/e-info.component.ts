import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent {

  inforeceived1: string[]=[];
  inforeceived2: string[]=[];
  inforeceived3: string[]=[];
  
getInfoFromService1()
{
  this.inforeceived1 =this.dservice.getInfo1();
}
getInfoFromService2()
{
  this.inforeceived2 =this.dservice.getInfo2();
}
getInfoFromService3()
{
  this.inforeceived3 =this.dservice.getInfo3();

}

constructor(private dservice:DataService) {

  
}

updateInfo(frm:any)
{
  this.dservice.addInfo(frm.value.location)
}
}
