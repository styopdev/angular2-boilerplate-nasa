import {Routes} from '@angular/router';
import {AsteroidsComponent} from './asteroids/asteroids.component';
import {ApodComponent} from './apod/apod.component';
import {HomeComponent} from './home/home.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'asteroids', component: AsteroidsComponent},
  {path: 'apod', component: ApodComponent}
];

