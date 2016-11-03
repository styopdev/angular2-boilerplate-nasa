import {Component, ViewEncapsulation} from '@angular/core';
import {NasaService} from '../nasa.service';

@Component({
  selector: 'asteroids',
  styleUrls: ['asteroids.component.css'],
  templateUrl: 'asteroids.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AsteroidsComponent {
	startDate: string = '';
	endDate: string = '';
  asteroids: any;
  constructor(private nasa: NasaService) {}

	go() {
		this.nasa.getAsteroids(this.startDate, this.endDate)
		 	.subscribe(asteroids => {
         this.asteroids = new Array();
        for (let entry in asteroids.near_earth_objects) {
          this.asteroids = this.asteroids.concat(asteroids.near_earth_objects[entry]);
        }
      });
	}
}
