import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavigatorComponent } from './component/navigator/navigator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
