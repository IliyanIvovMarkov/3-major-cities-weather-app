import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  location: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getCity(city: string) {
    this.weatherService.getWeatherDataByCityName(city).subscribe((data) => {
      this.location = data;
    });
  }
}
