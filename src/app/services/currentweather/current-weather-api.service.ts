import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from 'src/app/interfaces/currentweather';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherApiService {

  constructor(private client: HttpClient) { }

  //  'https://localhost:7085/api/CurrentWeather/' \
  getWeather(zipCode: string): Observable<CurrentWeather[]> {
    let weather = this.client.get<CurrentWeather[]>(
      environment.apiUrl + 'CurrentWeather/' + zipCode
    );

    //Add error handling: NullReference check
    return weather;
  }
}

