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

  constructor(private nasa: NasaService) {
  }

	go() {
		this.nasa.getAsteroids(this.startDate, this.endDate);
	}
}
