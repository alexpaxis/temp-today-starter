import { View, StyleSheet, Text } from "react-native";

import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import LocationSelector from "../components/LocationSelector";
import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../types/WeatherData";
import { CityName } from "../data/cities";
import calculateAverage from "../utils/calculateAverage";
import fetchWeatherData from "../utils/fetchWeatherData";

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

// Usage
const MainScreen = () => {
  const { setLocation, averageTemperature, humidity, windSpeed } =
    useWeatherData();

  return (
    <View style={styles.container}>
      {averageTemperature && humidity && windSpeed ? (
        <View>
          <WeatherDisplay
            temperature={averageTemperature}
            condition="Average Temperature"
          />
          <AdditionalInfo windSpeed={windSpeed} humidity={humidity} />
        </View>
      ) : (
        <Text>Could not retrieve weather data.</Text>
      )}

      <LocationSelector setLocation={setLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
});

export default MainScreen;
