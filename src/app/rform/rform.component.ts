import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  reactform:FormGroup=new FormGroup(
    {
      firstname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      lastname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      contact:new FormControl('',[Validators.required,Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")]),
      Gender:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      EmpId:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")]),
      password:new FormControl('',[Validators.required]),
      checkpassword:new FormControl('',[Validators.required])

    }
  );
  constructor() { }

  ngOnInit() {
  }

}
