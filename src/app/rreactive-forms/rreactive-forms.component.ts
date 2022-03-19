import { Component, OnInit,  } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { concatAll } from 'rxjs';
@Component({
  selector: 'app-rreactive-forms',
  templateUrl: './rreactive-forms.component.html',
  styleUrls: ['./rreactive-forms.component.css']
})
export class RreactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm=new FormGroup({
    name:new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]+$")]),
    email:new FormControl("",[Validators.required, Validators.email]),
    password:new FormControl("",[Validators.required, Validators.minLength(5)]),
  })

  userRegistration(){
    console.log(this.submitForm.value);
  }

  get name(){
    return this.submitForm.get("name");
  }
  get email(){
    return this.submitForm.get("email");
  }
  get password(){
    return this.submitForm.get("password");
  }

}
