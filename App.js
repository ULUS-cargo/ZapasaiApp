import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/customer/screens/HomeScreen.js';
import TabNavigator from './app/routes/TabNavigator.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  
  return  <TabNavigator />;
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F6F6FA',
    flex:5
  }


});