import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/day-forecast.model';

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.scss'],
})
export class DayForecastComponent implements OnInit {
  @Input() public dayForcast?: Day;

  constructor() {}

  ngOnInit(): void {}
}
