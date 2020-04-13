import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut',[
      state('void',style({
        opacity: 0
      })),
      transition('void <=> *',animate(5000))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[];
  activeItem: any;
  shouldShowDetails:boolean = false;
  shouldShowLabel:boolean = true;
  shouldShowDetailsFirst: boolean = false;
  shouldShowLabelFirst: boolean = true;
  shouldShowDetailsSecond: boolean = false;
  shouldShowLabelSecond: boolean = true;
  constructor() { 
    this.shouldShowDetails = false;
    this.shouldShowLabel = true;
  }
  selectedValues: string[] = ['val1','val2'];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: function () {
          console.log("hello");
        }
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-user'
      },
      {
        label : 'Certifications',
        icon : 'pi pi-fw pi-star-o'
      }
    ]
  }

  showDetail(id){
    if(id === 1){
      this.shouldShowDetailsFirst = true;
      this.shouldShowLabelFirst = false;
    }else if(id === 2){
      this.shouldShowDetailsSecond = true;
      this.shouldShowLabelSecond = false;
    }
  }

  showLabel(id){
    if(id === 1){
      this.shouldShowDetailsFirst = false;
      this.shouldShowLabelFirst = true;
    }else if(id === 2){
      this.shouldShowDetailsSecond = false;
      this.shouldShowLabelSecond = true;
    }
  }





}
