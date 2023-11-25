import * as React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
	TouchableOpacity,
	Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useMemo, useRef, useCallback } from "react";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import Registration from '../Registration/index';
export default function HomeScreen() {
	return (
		<ImageBackground
			resizeMode="cover"
			imageStyle={{ borderRadius: 18 }}
			source={require("../../../../assets/img/RegistrationBackground.png")}
			style={styles.registrationBackground}>
			<View
				style={{
					backgroundColor: "#F6F6FA",
					alignItems: "center",
					justifyContent: "center",
					marginLeft: 300,
					marginTop: 10,
				}}>
				<AntDesign name="close" size={24} color="black" />
			</View>

			<View
				style={{
					backgroundColor: "#F6F6FA",
					alignItems: "center",
					justifyContent: "center",
					width: 90,
					height: 90,
					borderRadius: 100,
					flex: 2,
					marginBottom: 10,
					borderColor: "#1232",
					borderWidth: 3,
				}}>
				<FontAwesome name="user" size={70} color="#4460F5" />
			</View>
			<View
				style={{
					backgroundColor: "#FF784C",
					width: 345,
					height: 40,
					alignItems: "center",
					borderRadius: 12,
					marginTop: 10,
					bottom: 5,

					justifyContent: "center",
				}}>
				<TouchableOpacity onPress={()=>{}}>
					<Text style={styles.registrationText}>Войти как магазин</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
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
});
