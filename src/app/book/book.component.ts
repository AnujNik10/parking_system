import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private router: Router) { }

  d: any[] = [];
  occ: any[] = [];

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

  gotoGateway(id: any) {
    this.router.navigate(['/gateway', id]);
    console.log('OKKKKK')
  }

}
