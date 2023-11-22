import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-ico-material-design";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AllHustoryScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<ImageBackground source={require('../../../assets/img/RegistrationBackground.png')} style={styles.registration}>
          
				</ImageBackground>
			</View>
			<StatusBar  backgroundColor="#1E1E20" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		//flexDirection: 'column',
		backgroundColor: "#1E1E20",

		flex: 1,
	},
	registration: {
    alignItems:'center',
    padding: 60,
    marginLeft:50,
    marginRight:50,
    backgroundColor:'#ffff'
  },

	registrationBackground: {
		alignItems: "center",
		backgroundColor: "#F6F6FA",
		borderRadius: 18,
	},

	calendar: {
		backgroundColor: "#fffff",
		borderRadius: 18,
	},
});
