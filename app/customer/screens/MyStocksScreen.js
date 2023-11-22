import * as React from "react"; 
import { StyleSheet, View, Text} from "react-native";
import { StatusBar } from 'expo-status-bar';
export default function AllHustoryScreen(){
    return(
        <View style={styles.container}> 
            <Text>
                its AllHistoryScreen
            </Text>
            <StatusBar style="dark" />
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F6F6FA',
    flex:5
  }


});