import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FormDataService} from '../form-data.service'

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  //reactForm:FormGroup;

  constructor(private router : Router,private formdata:FormDataService){
    
  }
  check:boolean
  //data:Object
  reactform:FormGroup=new FormGroup(
    {
      firstname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      lastname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      contact:new FormControl('',[Validators.required,Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))")]),
      Gender:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      EmpId:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$")]),
      Email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      checkpassword:new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      

    }
  );

  save()
  {
    //localStorage.setItem("FormData",JSON.stringify(this.reactform.value));
    this.formdata.setData(this.reactform.value);
    this.router.navigate(['/saved']);
    
  }

  PasswordCheck(){
    if(this.reactform.value.password!==this.reactform.value.checkpassword)
    this.check=false;
    else
   this.check=true;
    }
  

  ngOnInit() {
    
    if(this.router.url==='/rform')
    
    {
      
      let data=this.formdata.getData();
      console.log(data);
      console.log("yes");
      if(data!=null)
      
      this.reactform.patchValue({
        firstname: data.firstname,
        lastname: data.lastname,
        contact:data.contact,
        Gender:data.Gender,
        EmpId:data.EmpId,
        Email:data.Email,
        password:data.password,
        checkpassword:data.checkpassword
      });
    
    
    }
    else
    {
      console.log("No");
    }

  }

}
