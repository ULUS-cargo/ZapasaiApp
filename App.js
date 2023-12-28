import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './app/routes/TabNavigator.js';
import Registration from './app/customer/screens/Registration/reg.js';
export default function App() {
  
  return <Registration />
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F6F6FA',
    flex:5
  }


});