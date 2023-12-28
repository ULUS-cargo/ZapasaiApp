import * as React from "react";
import {
	StyleSheet,
	View,
	Text,
} from "react-native";



import { useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";


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
