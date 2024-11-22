import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../types/WeatherData";
import calculateAverage from "../utils/calculateAverage";
import fetchWeatherData from "../utils/fetchWeatherData";
import { CityName } from "../data/cities";

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
      null
    );
    const [location, setLocation] = useState<CityName>("London");
  
    useEffect(() => {
  
      const fetchWeather = async () => {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      };
  
      fetchWeather();
    }, [location]); // 🚀 Dependency array for useEffect
  
    // Compute average temperature from hourly weatherData
    const temperatures = weatherData?.hourly.temperature_2m;
    const averageTemperature = temperatures
      ? calculateAverage(temperatures)
      : undefined;
  
    const humidity = weatherData?.current.relative_humidity_2m;
    const windSpeed = weatherData?.current.wind_speed_10m;
  
    return { setLocation, averageTemperature, humidity, windSpeed };
  };

  export default useWeatherData;