import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Menu1Component } from './Menu/menu1/menu1.component';
import { Menu2Component } from './Menu/menu2/menu2.component';
import { Menu3Component } from './Menu/menu3/menu3.component';
import { Menu4Component } from './Menu/menu4/menu4.component';

@NgModule({
  declarations: [
    AppComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
