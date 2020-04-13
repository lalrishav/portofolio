import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header-tab-view',
  templateUrl: './header-tab-view.component.html',
  styleUrls: ['./header-tab-view.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(5000))
    ])
  ]
})
export class HeaderTabViewComponent implements OnInit {

  menuItems: MenuItem[];
  activeItem: any;
  shouldShowDetails: boolean;
  shouldShowLabel: boolean
  constructor() {
    this.shouldShowDetails = false;
    this.shouldShowLabel = true;
  }
  selectedValues: string[] = ['val1', 'val2'];

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
        label: 'Certifications',
        icon: 'pi pi-fw pi-star-o'
      }
    ]
  }

  showDetail() {
    this.shouldShowDetails = true;
    this.shouldShowLabel = false;
  }

  showLabel() {
    this.shouldShowLabel = true;
    this.shouldShowDetails = false;
  }

}
