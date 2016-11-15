import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {NasaService} from '../shared/nasa.service';
import {AsteroidsTableComponent} from './asteroids.table.component';

@Component({
  selector: 'asteroids',
  styleUrls: ['asteroids.component.css'],
  templateUrl: 'asteroids.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AsteroidsComponent {
	startDate: string = '';
	endDate: string = '';
  invalidRange: boolean;

  constructor(private nasa: NasaService) {
  }

  @ViewChild(AsteroidsTableComponent)  private child: AsteroidsTableComponent;

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
    
    let asteroidsFormatted = new Array();
    this.nasa.getAsteroids(this.startDate, this.endDate)
       .subscribe(asteroids => {
         console.log(asteroids);
        for (let date in asteroids.near_earth_objects) {
          for (let key in asteroids.near_earth_objects[date]) {
            let ast = asteroids.near_earth_objects[date][key];

            let asteroid = {
              name: ast.name,
              distance: ast.close_approach_data[0].miss_distance.kilometers,
              absolute_magnitude_h: ast.absolute_magnitude_h,
              is_potentially_hazardous: ast.is_potentially_hazardous_asteroid,
              diameter: ast.estimated_diameter.meters.estimated_diameter_min + ' - ' + ast.estimated_diameter.meters.estimated_diameter_max
            }
            asteroidsFormatted.push(asteroid);
          }
        } 
        this.child.asteroidsChanged(asteroidsFormatted);
      });
	}
}
