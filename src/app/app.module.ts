import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MenubarModule } from 'primeng/menubar';
import {CheckboxModule} from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import { HeaderTabViewComponent } from './header-tab-view/header-tab-view/header-tab-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTabViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    TooltipModule,
    MenubarModule,
    BrowserAnimationsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
