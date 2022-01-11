import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { WeatherInSevenDaysComponent } from './components/weather-in-seven-days/weather-in-seven-days.component';

const routes: Routes = [
  { path: 'today', component: WeatherTodayComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'seven-days', component: WeatherInSevenDaysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
