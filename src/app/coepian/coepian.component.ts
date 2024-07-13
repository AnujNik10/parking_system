import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coepian',
  templateUrl: './coepian.component.html',
  styleUrls: ['./coepian.component.css'],
})
export class CoepianComponent implements OnInit {
  d: any[] = [];
  occ: any[] = ['occupied', 'unoccupied'];
  constructor(private router: Router) {
    // setInterval(() => {
    //   axios
    //     .get('https://smart-parking-system-server.vercel.app/')
    //     .then((resp: any) => {
    //       console.log(resp.data);
    //       this.d = resp.data;
    //       this.d.forEach((item: any,index:number) => {
    //         if (item.data == '0') {
    //           this.occ[index] = 'occupied';
    //         } else {
    //           this.occ[index] ='unoccupied';
    //         }
    //       });
    //     });
    // }, 3000);
  }


  gotoLocate(location: any) {
    this.router.navigate(['/locate', location]);
  }

  ngOnInit(): void {
    this.d = [
      {
        location: 'Akot',
        timeStamp: '9pm'
      },
      {
        location: 'pune',
        timeStamp: '10am'
      },
      {
        location: 'pune',
        timeStamp: '10am'
      },
      {
        location: 'pune',
        timeStamp: '10am'
      },
      {
        location: 'pune',
        timeStamp: '10am'
      }
    ]
  }
}
