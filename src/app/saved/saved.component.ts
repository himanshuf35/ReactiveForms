import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  data:Object
  constructor(private router: Router) {
    this.data=JSON.parse(localStorage.getItem("FormData"));

   }


  goback()
  {
    this.router.navigate(['/rform']);
  }
  ngOnInit() {
  }

}
