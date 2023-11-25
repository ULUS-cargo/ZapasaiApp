import React, { useRef, useMemo, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetModal,
	useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomSheetForMyStocks } from "./BottomSheetForMyStocks";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function HomeScreen() {
	const snapPoints = useMemo(() => ["56%", "75%", "100%"], []);

	return (
		<GestureHandlerRootView>
		<BottomSheet snapPoints={snapPoints}>
			<View style={styles.bottomReminders}>
				<Text style={{ fontSize: 16, fontWeight: '300', }}>
					Напоминания и уведомления
				</Text>
			</View>
		</BottomSheet>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		flex: 1,
		alignItems: "center",
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
	bottomReminders:{
		
	}
});
