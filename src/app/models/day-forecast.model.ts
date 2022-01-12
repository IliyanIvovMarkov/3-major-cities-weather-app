export enum Forecast {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Windy = 'windy'
}

export interface Day {
  day: string;
  temp: number;
  rainChance: number;
  forecast: Forecast;
}
