import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid19';

  constructor(private breakPointObserver : BreakpointObserver){}

  ngOnInit(){
    this.breakPointObserver.observe([
      '(max-width : 768px)'
    ]).subscribe(result => {
      if(result.matches){
        console.log("tab size detected");
      }else{
        console.log("hii");
      }
    })
  }
}
