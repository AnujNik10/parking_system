import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform = new FormGroup({
    Username:new FormControl(''),
    Password:new FormControl(''),
  })

  signupUser(){
    console.warn(this.signupform.value)
  }
  constructor() { }

  ngOnInit(): void {
  }
}
