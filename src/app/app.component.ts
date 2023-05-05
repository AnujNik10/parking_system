import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';

  constructor(private router:Router){
    let user = localStorage.getItem("smartUser")
    if(!user && window.location.pathname != "/signup"){
      // console.log(window.location.pathname);
      this.router.navigateByUrl("/login")
    }
  }
}
