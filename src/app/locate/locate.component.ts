import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css']
})
export class LocateComponent implements OnInit {

  slot:any=5
  constructor() { }

  ngOnInit(): void {
    
  }

  set1() {
    this.slot=1
  }
  set2() {
    this.slot=2
  }
  set3() {
    this.slot=3
  }
  set4() {
    this.slot=4
  }
  


}


