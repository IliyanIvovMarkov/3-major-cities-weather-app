import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models/day-forecast.model";

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {


  @Input() forecast?: Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}
