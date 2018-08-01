import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  formdata;

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
