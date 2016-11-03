import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

let apiKey = '573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx';


@Injectable()
export class NasaService {
  constructor(public http: Http) {}

  public getAsteroids(startDate: string, endDate: string) {
    let params = new URLSearchParams();
    params.set('start_date', startDate);
    params.set('end_date', endDate);
    params.set('api_key', apiKey);

    let url = `https://api.nasa.gov/planetary/apod`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }

  public getApod(date: string) {
    let params = new URLSearchParams();
    params.set('date', date);
    params.set('api_key', apiKey);

    let url = `https://api.nasa.gov/neo/rest/v1/feed`;
    return this.http.get(url, {search: params})
      .map((res) => {res.json()})
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}