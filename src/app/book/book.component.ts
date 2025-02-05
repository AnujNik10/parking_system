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

  docSrc:String=""

  ngOnInit(): void {
    axios.get('http://localhost:5000/api/renter/allSlots')
    .then((resp:any)=>{
      console.log(resp)
      this.d = resp.data;
      this.d.forEach((item :any) => {
        if(item.status == 'Booked'){
          this.occ.push('occupied')
        }
        else{
          this.occ.push('unoccupied')
        }
      });
    });

    
  }

  gotoGateway(item: any) {
    console.log(item)
    if(item.status === "Booked" ){
      console.log("Bookedddd");
      
      return
    }
    const toPassFrwd = {
      renter:item.userId._id,
      location:item.location,
      parkingType:item.parkingType,
      price:item.price,
    }
    this.router.navigate(['/gateway',item.location],{queryParams:{bookItem:JSON.stringify(toPassFrwd)}});
    console.log('OKKKKK')
  }

  viewDocument(src:String){
    this.docSrc=src;
  }

}
