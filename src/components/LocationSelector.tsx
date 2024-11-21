import { Picker } from "@react-native-picker/picker";
import { cityCoordinates, CityName } from "../data/cities";
import { useState } from "react";
import StyledButton from "./StyledButton";
import { Alert, View } from "react-native";



const LocationSelector = () => {

    const [selectedCity, setSelectedCity] = useState<CityName>("Berlin");

    const handleCityChange = (city: CityName) => {
        setSelectedCity(city);
        console.log(`The city is : ${city}`);
      };

      const handlePress = () => {
        Alert.alert("Location Set", `You have selected: ${selectedCity}`);
        console.log(`Location Set. You have selected: ${selectedCity}`);
      };

    return (

        <View className="m-5">
      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) => handleCityChange(itemValue)}
      >
        {Object.keys(cityCoordinates).map((city) => (
            <Picker.Item key={city} label={city} value={city} />
        ))}
    </Picker>
    <StyledButton onPress={handlePress}>ChooseCity {selectedCity}</StyledButton>
</View>
  );
};

export default LocationSelector;