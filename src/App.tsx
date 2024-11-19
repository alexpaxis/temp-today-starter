import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

import "../global.css";
import WeatherDisplay from "./components/WeatherDisplay";


export default function App() {
  return (

    <SafeAreaView style={{flex: 1}}>
      <Header title="Temperature Today!!" />
      <View style={styles.container}>
      <StatusBar style="auto" />
      <WeatherDisplay temperature={25} condition="Sunny" />
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});
