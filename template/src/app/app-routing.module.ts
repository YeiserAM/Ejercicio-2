import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu1Component } from './Menu/menu1/menu1.component';
import { Menu2Component } from './Menu/menu2/menu2.component';
import { Menu3Component } from './Menu/menu3/menu3.component';
import { Menu4Component } from './Menu/menu4/menu4.component';


const routes: Routes = [
  {path: "menu1", component:Menu1Component},
  {path: "menu2", component:Menu2Component},
  {path: "menu3", component:Menu3Component},
  {path: "menu4", component:Menu4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
