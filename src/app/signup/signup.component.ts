import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName} from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) {  }
  
  signupform = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
    fname:new FormControl(''),
    lname:new FormControl(''),
    phone:new FormControl(''),
  })

  error:String="";
  

  signupUser(){
    console.log(this.signupform.value)
    axios.post("http://localhost:5000/api/user/signup",this.signupform.value)
    .then((response)=>{
      console.log(response)
      if(response.data.user){
        localStorage.setItem("smartUser",JSON.stringify(response.data.user))
        console.log(this.router);
        this.router.navigateByUrl("/")
        
      }
    })
    .catch((err)=>{
      let errMsg = err.response.data.errors[0].msg
      if(errMsg){
        this.error = errMsg
      }
    })
    
  }
  

  ngOnInit(): void {
  }
}
