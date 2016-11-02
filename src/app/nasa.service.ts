import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

let apiKey = '573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx';
let http: Http;

@Injectable()
export class NasaService {
  public static getAsteroids(startDate: string, endDate: string) {
    let params = new URLSearchParams();
    params.set('start_date', startDate);
    params.set('end_date', endDate);
    params.set('api_key', apiKey);

    let url = `https://api.nasa.gov/planetary/apod`;
    return http.get(url, {search: params})
      .map((res) => res.json());
  }

  public static getApod(date: string) {
    let params = new URLSearchParams();
    params.set('date', date);
    params.set('api_key', apiKey);

    let url = `https://api.nasa.gov/neo/rest/v1/feed`;
    return http.get(url, {search: params})
      .map((res) => res.json());
  }
}