import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AsteroidsComponent} from './asteroids/asteroids.component';
import {ApodComponent} from './apod/apod.component';
import {SubmitPlanetComponent} from './submit-planet/submit-planet.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'asteroids', component: AsteroidsComponent},
  {path: 'apod', component: ApodComponent},
  {path: 'submit-planet', component: SubmitPlanetComponent}
];

