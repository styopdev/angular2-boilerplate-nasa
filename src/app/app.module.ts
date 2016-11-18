import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, PathLocationStrategy } from '@angular/common';

import {NasaService} from "./shared/nasa.service";
import {HomeComponent} from './home/home.component';
import {ApodComponent} from './apod/apod.component';
import {AsteroidsComponent} from './asteroids/asteroids.component';
import {AsteroidsTableComponent} from './asteroids/asteroids.table.component';
import {SubmitPlanetComponent} from './submit-planet/submit-planet.component';

import {DatePicker} from 'ng2-datepicker/ng2-datepicker';
import {TranslateModule} from "ng2-translate";
import {Ng2TableModule} from 'ng2-table/ng2-table';
import {PaginationModule} from 'ng2-bootstrap';

@NgModule({
  declarations: [AppComponent, ApodComponent, AsteroidsComponent, HomeComponent, DatePicker, AsteroidsTableComponent, SubmitPlanetComponent],
  imports     : [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), TranslateModule.forRoot(), Ng2TableModule, PaginationModule],
  exports 		: [TranslateModule],
  providers   : [NasaService, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
