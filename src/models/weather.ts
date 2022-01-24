export interface Weather {
  coord?: Coord;
  weather?: WeatherDescription[];
  base?: string;
  main?: Main;
  visibility?: number;
  wind?: Wind;
  clouds?: Clouds;
  dt?: number;
  sys?: Sys;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}
interface Clouds {
  all: number;
}
interface Coord {
  lon: number;
  lat: number;
}
interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  feels_like: number;
  temp_max: number;
}
interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
interface Wind {
  speed: number;
  deg: number;
}
