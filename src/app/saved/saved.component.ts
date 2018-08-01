import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService} from '../form-data.service'

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  data:Object
  constructor(private router: Router,private formdata:FormDataService) {
    //this.data=JSON.parse(localStorage.getItem("FormData"));
    this.data=this.formdata.getData();
    console.log(this.data);
   }


  goback()
  {
    this.router.navigate(['/rform']);
  }
  ngOnInit() {
  }

}
