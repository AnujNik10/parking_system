import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-coepian',
  templateUrl: './coepian.component.html',
  styleUrls: ['./coepian.component.css']
})
export class CoepianComponent implements OnInit {

  d: any
  o: boolean | undefined
  occ : any
  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get('http://localhost:5000/posts');
  }

  ngOnInit(): void {

    this.getdata().subscribe((data) => {
      this.d=data
      this.d=JSON.stringify(this.d)
    });

    console.log(this.d)

    if(this.o){
      this.occ='occupied'
    }
    else{
      this.occ='unoccupied'
    }
  }



}
