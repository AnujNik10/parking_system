import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coepian',
  templateUrl: './coepian.component.html',
  styleUrls: ['./coepian.component.css']
})
export class CoepianComponent implements OnInit {

  o: boolean = false
  occ : any
  constructor() { }

  ngOnInit(): void {
    if(this.o){
      this.occ='occupied'
    }
    else{
      this.occ='unoccupied'
    }
  }

}
