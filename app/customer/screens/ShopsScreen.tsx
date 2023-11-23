import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import {BottomSheetForMyStocks} from './BottomSheetForMyStocks';


export default function ShoppingListScreen() {
  
  return (
		<SafeAreaView>
		
		</SafeAreaView>
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
});
