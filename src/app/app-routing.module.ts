import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderTabViewComponent } from './header-tab-view/header-tab-view/header-tab-view.component';
import { HeaderComponent } from './header/header/header.component';


const routes: Routes = [
  { path: 'tab-view', component: HeaderTabViewComponent },
  { path: '', component: HeaderComponent, pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
