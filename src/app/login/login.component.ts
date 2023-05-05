import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
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

  loginUser(){
    console.warn(this.loginform.value)
    axios.post("http://localhost:5000/api/user/signin",{email:this.loginform.value.Username,password:this.loginform.value.Password})
    .then((response)=>{console.log(response.data)})
    .catch((err)=>{console.log(err)})
  }
  constructor() { }

  ngOnInit(): void {
  }

}

