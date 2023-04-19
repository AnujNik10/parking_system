import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-coepian',
  templateUrl: './coepian.component.html',
  styleUrls: ['./coepian.component.css'],
})
export class CoepianComponent implements OnInit {
  d: any
  o: boolean = false;
  occ: any;
  constructor() {}

  ngOnInit(): void {
    axios.get('https://smart-parking-system-server.vercel.app/')
    .then((resp:any)=>{
      console.log(resp.data)
      this.d = resp.data;
    });

    // console.log(resp);
    if (this.o) {
      this.occ = 'occupied';
    } else {
      this.occ = 'unoccupied';
    }
  }
}