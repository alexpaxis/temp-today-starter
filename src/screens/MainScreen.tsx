import { View, StyleSheet } from "react-native";

import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import LocationSelector from "../components/LocationSelector";


const MainScreen = () => {
    return (
       <View style={styles.container}>
         <View>
            <WeatherDisplay temperature={25} condition="Sunny" />
            <AdditionalInfo windSpeed={10} humidity={80} />
            {/* <StyledButton title="Refresh" onPress={() => console.log("Button Pressed")} /> */}
         </View>
         <View>
            {/* <StyledButton onPress={() => console.log("Button Pressed")}>Refresh</StyledButton> */}
            <LocationSelector/>
        </View>
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