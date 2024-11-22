import { View, StyleSheet, Text } from "react-native";
import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import LocationSelector from "../components/LocationSelector";
import weatherStore from "../stores/WeatherStore";
import { observer } from "mobx-react";
import useWeatherData from "../practice/useWeatherData";

// Usage
const MainScreen = observer(() => {

    const { averageTemperature } = useWeatherData(); // 🌟 Use averageTemperature from the hook
    const { humidity, windSpeed, setLocation } = weatherStore; // 🌟 Use data from the store

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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
});

export default MainScreen;
