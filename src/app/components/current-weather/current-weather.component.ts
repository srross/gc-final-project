import { Component, OnInit } from '@angular/core';
import { CurrentWeather, Temperature } from 'src/app/interfaces/currentweather';
import { CurrentWeatherApiService } from 'src/app/services/currentweather/current-weather-api.service';
import { ListClothesByTempComponent } from '../list-clothes-by-temp/list-clothes-by-temp.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private service: CurrentWeatherApiService) { }

  ngOnInit(): void {

  }

  currentWeatherArray: CurrentWeather[] = [];
  zipCode: string="     ";

  getWeather(zipCode: string) {
    this.service
      .getWeather(zipCode)
      .subscribe((data: CurrentWeather[]) => (this.currentWeatherArray = data));
  }

  submitForm(form:any){
    if(this.zipCode !== undefined) { 
      this.zipCode=form.value["zipCode"]
      this.getWeather(this.zipCode);
      } 
  }
}

