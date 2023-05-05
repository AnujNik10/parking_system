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
  constructor() {
    setInterval(() => {
      axios
        .get('https://smart-parking-system-server.vercel.app/')
        .then((resp: any) => {
          console.log(resp.data);
          this.d = resp.data;
          this.d.forEach((item: any,index:number) => {
            if (item.data == '0') {
              this.occ[index] = 'occupied';
            } else {
              this.occ[index] ='unoccupied';
            }
          });
        });
    }, 3000);
  }

  ngOnInit(): void {}
}
