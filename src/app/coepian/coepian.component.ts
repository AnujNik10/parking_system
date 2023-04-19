import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'


@Component({
  selector: 'app-coepian',
  templateUrl: './coepian.component.html',
  styleUrls: ['./coepian.component.css']
})
export class CoepianComponent implements OnInit {

  d: any
  o: any
  occ : any
  constructor(private http: HttpClient) { }



  getdata() {
    return this.http.get('http://localhost:3000/slots');
  }



  ngOnInit(): void {

    this.getdata().subscribe((data) => {
      this.d = data;
      this.o = this.d[0].status
    });



    if(this.o){
      this.occ='occupied'
    }
    else{
      this.occ='unoccupied'
    }
  }
  



}
