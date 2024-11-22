import axios from "axios";
import { cityCoordinates, CityName } from "../data/cities";
import { WeatherApiResponse } from "../types/WeatherData";

const fetchWeatherData = async (location: CityName) => {
  // 🌟 Get the coordinates for location
  const coords = cityCoordinates[location];

  // 🌟 Make an API request with axios
  const response = await axios.get<WeatherApiResponse>(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        current: "relative_humidity_2m,wind_speed_10m",
        hourly: "temperature_2m",
        timezone: "Europe/Berlin",
        past_days: 0,
        forecast_days: 1,
      },
    //   headers:{
    //     "x-api-key": ""
    //   }
    }
  );
  // 🚀 Return the data
  return response.data;
};

export default fetchWeatherData;
