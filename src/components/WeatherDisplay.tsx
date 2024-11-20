import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

type WeatherProps = 
{
    temperature: number;
    condition: string;
}

const StyledContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: "100%";
`;

const StyledTextTemperature = styled.Text`
  padding-top: 40px;
  color: #333;
  font-size: 48px;
  font-weight: bold;
`;

const StyledTextCondition = styled.Text`
  font-size: 24px;
  color: #666;
  margin-top: 10px;
`;

const WeatherDisplay: React.FC<WeatherProps> = ({temperature,condition}) => 
{
    return  <StyledContainer>
                <StyledTextTemperature>{temperature}°C</StyledTextTemperature>
                <StyledTextCondition>{condition}</StyledTextCondition>
            </StyledContainer>
}

    // const styles = StyleSheet.create({
    //     container: {
    //       alignItems: "center",
    //       justifyContent: "center",
    //       width: "100%"
    //     },
    //       temperature: {
    //         paddingTop: 40,
    //         color: "#333",
    //         fontSize: 48,
    //         fontWeight: "bold",
    //       },
    //       condition: {
    //         marginTop: 10,
    //         color: "#666",
    //         fontSize: 24
    //       }
    //   });

export default WeatherDisplay;