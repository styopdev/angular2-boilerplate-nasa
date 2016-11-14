import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {NasaService} from "./shared/nasa.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ApodComponent} from './apod/apod.component';
import {AsteroidsComponent} from './asteroids/asteroids.component';
import {HomeComponent} from './home/home.component';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';
import {TranslateModule} from "ng2-translate";
import {LocationStrategy, PathLocationStrategy } from '@angular/common';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { AsteroidsTableComponent } from './asteroids/asteroids.table.component';

@NgModule({
  declarations: [AppComponent, ApodComponent, AsteroidsComponent, HomeComponent, DatePicker, AsteroidsTableComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), TranslateModule.forRoot(), Ng2TableModule, PaginationModule],
  exports 		: [TranslateModule],
  providers   : [NasaService, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
