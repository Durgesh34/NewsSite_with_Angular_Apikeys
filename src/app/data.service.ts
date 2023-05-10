import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1:string[]=['Durgesh Raundal','E001','durgesh@.net']
  info2:string[]=['Mahendra','E002','mahendarh@.net']
  info3:string[]=['Sachin','E003','sachin@.net']

  getInfo1(): string[]
  {
  return this.info1
  }

  getInfo2(): string[]
  {
  return this.info2
  }

  getInfo3(): string[]
  {
  return this.info3
  }

  addInfo(info: string)
  {
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }
  constructor() { }
}
