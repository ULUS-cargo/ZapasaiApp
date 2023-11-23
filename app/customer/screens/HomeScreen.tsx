import * as React from "react";
import {
	StyleSheet,
	View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";


import { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import moment from "moment";


import RegistrationDiv from './HomeScreen/RegistrationDiv';
import Calendar from './HomeScreen/Calendar';
import Reminders from './HomeScreen/Reminders';
let datesWhiteList = [
	{
		start: moment(),
		end: moment().add(3, "days"),
	},
];
let dateBlackList = [moment().add(1, "days")];

export default function HomeScreen() {
	const snapPoints = useMemo(() => ["45%", "73%", "100%"], []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					{/* Регистрацияяяяя */}
					<RegistrationDiv />  

					{/* Календаррьь */}
					<Calendar />
					{/* Календаррьь */}
					{/* Оповещение */}
					<Reminders />

					
				</View>
				
			</SafeAreaView>
			<StatusBar style='light'  backgroundColor="black"/>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1E1E20",
		flex: 1,
		alignItems: "center",

	},
	registrationBackground: {
		width: 369,
		height: 180,
		alignItems: "center",
	},
	registrationText: {
		//fontFamily: "Inter",
		fontSize: 17,
		color: "white",
		fontWeight: "bold",
		alignItems: "center",
		justifyContent: "center",
	},

	calendar: {
		backgroundColor: "#fffff",
		borderRadius: 18,
	},
	contentContainer: {
		alignItems: "center",
	},
	input: {
		marginTop: 8,
		marginHorizontal: 16,
		marginBottom: 10,
		borderRadius: 10,
		fontSize: 16,
		lineHeight: 20,
		padding: 8,
		backgroundColor: "#FFFFFF",
		color: "#00160A",
		borderColor: "#000000",
	},

	bottomReminders: {
		alignItems: "center",
		justifyContent: "center",
	},
});
