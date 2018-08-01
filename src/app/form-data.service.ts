import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  formdata:Object

  constructor() { }
  getData()
  {
      return this.formdata
  }
  setData(inputdata)
  {
       this.formdata=inputdata
  }
}
