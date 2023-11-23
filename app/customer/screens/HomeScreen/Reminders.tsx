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

export default function HomeScreen() {
	const snapPoints = useMemo(() => ["56%", "75%", "100%"], []);

	return (
		<BottomSheet snapPoints={snapPoints}>
			<View style={styles.bottomReminders}>
				<Text style={{ fontSize: 16, fontWeight: '300', }}>
					Напоминания и уведомления
				</Text>
			</View>
		</BottomSheet>
	);
}

const styles = StyleSheet.create({
	bottomReminders: {
		alignItems:'center'
	},
});
