import {Component} from '@angular/core';
import {NasaService} from '../nasa.service';

@Component({
  selector: 'apod',
  styleUrls: ['apod.component.css'],
  templateUrl: 'apod.component.html'
})
export class ApodComponent {
	date: string = '';

  constructor(private nasa: NasaService) {
  }

	go() {
		this.nasa.getApod(this.date);
	}
}
