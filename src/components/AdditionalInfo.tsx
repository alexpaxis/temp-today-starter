import React from "react";
import { View, Text, StyleSheet } from "react-native";

type AdditionalInfoProps = {
  windSpeed: number;
  humidity: number;
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  windSpeed,
  humidity,
}) => {
  return (
    <View className="mt-5 items-center">
       <Text className="text-base my-1">Wind Speed: {windSpeed} km/h</Text>
       <Text className="text-base my-1">Humidity: {humidity}%</Text>
   </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
// });

export default AdditionalInfo;