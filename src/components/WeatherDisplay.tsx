import { StyleSheet, Text, View } from "react-native";


type WeatherProps = 
{
    temperature: number;
    condition: string;
}

const WeatherDisplay: React.FC<WeatherProps> = ({temperature,condition}) => 
    {
        return  <View style={styles.container}>
                    <Text style={styles.temperature}>{temperature}°C</Text>
                    <Text style={styles.condition}>{condition}</Text>
                </View>
    }

    const styles = StyleSheet.create({
        container: {
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        },
          temperature: {
            paddingTop: 40,
            color: "#333",
            fontSize: 48,
            fontWeight: "bold",
          },
          condition: {
            marginTop: 10,
            color: "#666",
            fontSize: 24
          }
      });

    export default WeatherDisplay;