import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css']
})
export class LocateComponent implements OnInit {
  loc: any
  slot:any=5
  constructor(private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loc = this.aroute.snapshot.paramMap.get('location');
    if(this.loc=='extension'){
      this.set1()
    }
    else if(this.loc=='AC'){
      this.set3()
    }
    else if(this.loc=='instru'){
      this.set2()
    }
    else if(this.loc=='ENTC'){
      this.set4()
    }
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


