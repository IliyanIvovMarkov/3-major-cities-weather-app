import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherInSevenDaysComponent} from "./components/weather-in-seven-days/weather-in-seven-days.component";
import {DetailsPageComponent} from "./components/details-page/details-page.component";

const routes: Routes = [
  { path: 'seven-days/:city', component: WeatherInSevenDaysComponent },
  { path: 'today', component: WeatherTodayComponent },

  { path: 'details/:city', component: DetailsPageComponent },
  { path: '', redirectTo: '/today', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
