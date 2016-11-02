import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {NasaService} from "./nasa.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ApodComponent} from './apod/apod.component';
import {AsteroidsComponent} from './asteroids/asteroids.component';
import {HomeComponent} from './home/home.component';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, ApodComponent, AsteroidsComponent, HomeComponent, DatePicker],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [NasaService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
