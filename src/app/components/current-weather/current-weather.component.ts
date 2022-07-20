import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/interfaces/currentweather';
import { CurrentWeatherApiService } from 'src/app/services/currentweather/current-weather-api.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private service: CurrentWeatherApiService) { }

  ngOnInit(): void {
    this.getWeather('77373');
  }

  currentWeatherArray: CurrentWeather[] = [];


  getWeather(zipCode: string) {
    this.service
      .getWeather(zipCode)
      .subscribe((data: CurrentWeather[]) => (this.currentWeatherArray = data));
  }
}
