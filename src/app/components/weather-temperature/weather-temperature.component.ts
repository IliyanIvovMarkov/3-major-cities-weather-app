import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss']
})
export class WeatherTemperatureComponent implements OnInit {
@Input() temperature?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
