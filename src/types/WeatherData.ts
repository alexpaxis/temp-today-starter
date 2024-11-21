export interface WeatherApiResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current: CurrentWeather;
    hourly_units: HourlyUnits;
    hourly: HourlyUnits;
    // 🚀 Add other properties such as generationtime_ms, timezone, elevation, etc.
  }
  
  export interface CurrentWeather {
     // 🚀 Define the properties based on "current"
    time: string;
    interval: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
  }
  
  export interface HourlyUnits {
    // 🚀 Define the properties based on "hourly_units"
        time: string;
        temperature_2m: string;
  }
  
  export interface HourlyData {
    // 🚀 Define the properties based on "hourly"
    time: string[];
    temperature_2m: number[];
  }