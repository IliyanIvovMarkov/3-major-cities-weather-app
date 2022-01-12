import {Component, OnInit} from '@angular/core';
import {Day, Forecast} from 'src/app/models/day-forecast.model';
import {ActivatedRoute, Route, Router} from "@angular/router";


@Component({
  selector: 'app-weather-in-seven-days',
  templateUrl: './weather-in-seven-days.component.html',
  styleUrls: ['./weather-in-seven-days.component.scss'],
})
export class WeatherInSevenDaysComponent implements OnInit {

  public city: string = '';

  days: Day[] = [
    { forecast: Forecast.Rainy, day: 'Monday', temp: 20, rainChance: 60 },
    { forecast: Forecast.Sunny, day: 'Tuesday', temp: 30, rainChance: 80 },
    { forecast: Forecast.Rainy, day: 'Wednesday', temp: 25, rainChance: 70 },
    { forecast: Forecast.Rainy, day: 'Thursday', temp: 30, rainChance: 50 },
    { forecast: Forecast.Rainy, day: 'Friday', temp: 18, rainChance: 13 },
    { forecast: Forecast.Windy, day: 'Saturday', temp: 16, rainChance: 6 },
    { forecast: Forecast.Rainy, day: 'Sunday', temp: 19, rainChance: 18 },
  ];

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(routeParameters => {
      this.city = routeParameters['city'];
    })
  };

  ngOnInit(): void {}
}

//
// const activatedRoute = {
//   params: new Promise((resolve, reject) => {
//     resolve({city: 'london'});
//   })
// }
//
//
// activatedRoute.params.then((params: any) => {
//   console.log(params.city);
// })

//
//
//
//
// class Dog {
//   private name: string;
//
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//
// class Dog {
//   constructor(private name: string) {}
// }
//
// const myDog = new Dog('fluffy');
//
// myDog.n
// myDog.name;
