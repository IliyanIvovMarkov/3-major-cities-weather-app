import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { SearchComponent } from './components/search/search.component';
import { CityWeatherInfoComponent } from './components/city-weather-info/city-weather-info.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import {DayForecastComponent} from "./components/day-forecast/day-forecast.component";

@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    SearchComponent,
    CityWeatherInfoComponent,
    WeatherTodayComponent,
    DayForecastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
