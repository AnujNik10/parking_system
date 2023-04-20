import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-coepian',
  templateUrl: './coepian.component.html',
  styleUrls: ['./coepian.component.css'],
})
export class CoepianComponent implements OnInit {
  d: any[] = [];
  occ: any[] = [];
  constructor() {}

  ngOnInit(): void {
    axios.get('https://smart-parking-system-server.vercel.app/')
    .then((resp:any)=>{
      this.d = resp.data;
      this.d.forEach((item :any) => {
        if(item.data == '0'){
          this.occ.push('occupied')
        }
        else{
          this.occ.push('unoccupied')
        }
      });
    });

    
  }
}