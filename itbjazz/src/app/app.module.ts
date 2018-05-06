import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { MainPageComponent } from './component/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
