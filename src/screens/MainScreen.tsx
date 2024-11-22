import { View, StyleSheet, Text } from "react-native";

import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import LocationSelector from "../components/LocationSelector";
import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../types/WeatherData";
import axios from "axios";
import { cityCoordinates, CityName } from "../data/cities";
import calculateAverage from "../utils/calculateAverage";

const MainScreen = () => {

    const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
    const [location, setLocation] = useState<CityName>("London");

    useEffect(() => {
        const fetchWeather = async () => {
        // 🌟 Get the coordinates for "Berlin" here
        const coords = cityCoordinates[location];
        
        // 🌟 Make an API request with axios and update state
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
            }
        );
        // 🚀 Update the weatherData state with the response
        setWeatherData(response.data);
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

    return (
       <View style={styles.container}>
            <View>
                <WeatherDisplay temperature={25} condition="Sunny" />
                <AdditionalInfo windSpeed={10} humidity={80} />
            </View>
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

            <LocationSelector setLocation={setLocation}/>
        </View>
    );   
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignSelf: 'stretch',
      paddingHorizontal: 10,
    }
  });
  
  export default MainScreen;