import { SafeAreaView } from "react-native";import MainScreen from "./screens/MainScreen";
import "../global.css";
import Header from "./components/Header";
import { StatusBar } from "expo-status-bar";

export default function App() 
{  
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" />
      <Header title="Temperature Today!!" />
      <MainScreen/>
    </SafeAreaView>
  );
}

