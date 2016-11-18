import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
let galaxies = [{ name: "Milky Way" }, { name :"Messier 83" }, { name: "Black Eye Galaxy" }, { name: "Pinwheel" }, { name: "Canis Major Dwarf" }, { name: "Somewhere else..." }];

@Component({
  selector: 'example-app',
  styleUrls: ['submit-planet.css'],
  templateUrl: 'submit-planet.html'
})

export class SubmitPlanetComponent {
  form: FormGroup;
  submitted: Boolean;
  galaxies: Array<any>;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      planetdata: fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(16)]],
        location: ['', Validators.required],
        diameter: ['', Validators.required],
        distance: ['', Validators.required]
      }),
      userdata: fb.group({
        username: ['', Validators.required],
        email: ['', [<any>Validators.required, <any>Validators.pattern(emailRegex)]]
      })
    });

    this.galaxies = galaxies;
    this.form.valueChanges.subscribe(d => this.submitted = false);
  }

  submitPlanet() {
    this.submitted = true;
  }
}

