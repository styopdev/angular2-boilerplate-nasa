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
  invalidRange: boolean;

  constructor(private nasa: NasaService) {
  }
  
  validateRange () {
    this.invalidRange = false;
    var oneDay = 24 * 60 * 60 * 1000;
    var firstDate = new Date(this.startDate);
    var secondDate = new Date(this.endDate);
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    if (diffDays > 7) {
      this.invalidRange = true;
    }
    return this.invalidRange;
  }
	
  go() {
    if (this.validateRange()) {
      return;
    }
		this.nasa.getAsteroids(this.startDate, this.endDate)
		 	.subscribe(asteroids => {
        this.asteroids = new Array();
        for (let entry in asteroids.near_earth_objects) {
          this.asteroids = this.asteroids.concat(asteroids.near_earth_objects[entry]);
        }
      });
	}
}
