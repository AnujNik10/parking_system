import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    Username:new FormControl(''),
    Password:new FormControl(''),
  })

  error:String="";

  loginUser(){
    console.warn(this.loginform.value)
    axios.post("http://localhost:5000/api/user/signin",{email:this.loginform.value.Username,password:this.loginform.value.Password})
    .then((response)=>{
      console.log(response.data)
      if(response.data.user){
        localStorage.setItem("smartUser",JSON.stringify(response.data.user))
        console.log(this.router);
        this.router.navigateByUrl("/")
        
      }
    })
    .catch((err)=>{
      console.log(err)
      let errMsg = err.response.data.error
      if(errMsg){
        this.error = errMsg
      }
    })
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

