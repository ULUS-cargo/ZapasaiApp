import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './app/routes/TabNavigator.js';

export default function App() {
  
  return <TabNavigator />
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F6F6FA',
    flex:5
  }


});