import * as React from "react";
import { useMemo, useRef, useCallback, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableOpacity,
	Modal,
	ScrollView,
	FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetTextInput,
} from "@gorhom/bottom-sheet";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { isModifier } from "typescript";

import Form from "./MyStocks/Form";
import ListItem from "./MyStocks/ListItem";
import ListItemCategoryScreen from "./MyStocks/ListItemCategoryScreen";
import ListItemDataCategoryScreen from "./MyStocks/ListItemDataCategoryScreen";
export default function MyStockScreen() {
	const today = new Date();
	const startDate = getFormatedDate(
		today.setDate(today.getDate() + 1),
		"YYYY/MM/DD"
	);
	const onchange = (product) => {
		setProduct(product);
	};
	const onchangeStock = (Stock) => {
		setStock(Stock);
	};
	const [Stock, setStock] = React.useState("");
	const [category, setCategory] = React.useState("Все");
	const [open, setOpen] = React.useState(false); //open and close modal
	const [date, setDate] = React.useState("2023/23/11"); //date var
	const [product, setProduct] = React.useState("Молоко");
	function handleOnPress() {
		setOpen(!open);
	}
	function handleChange(propDate) {
		setDate(propDate);
	}

	const snapPoints = useMemo(() => ["45%"], []);

	const snapPointsCategory = ["90%"];
	const bottomSheetRefCategory = useRef<BottomSheet>(null);
	const handleOpenPressCategory = () =>
		bottomSheetRefCategory.current?.expand();

	const bottomSheetRef = useRef<BottomSheet>(null);
	const handleOpenPress = () => bottomSheetRef.current?.expand();
	const handleClosePress = () => bottomSheetRef.current?.close();
	const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop
				appearsOnIndex={0}
				disappearsOnIndex={-1}
				{...props}
			/>
		),
		[]
	);

	const [listOfItems, setListOfItems] = useState([{ text: "Все", key: "0" }]);

	const addHandler = (text) => {
		setListOfItems((list) => {
			return [
				{ text: text, key: Math.random().toString(36).substring(7) },
				...list,
			];
		});
	};

	const [DATA, setListofDATA] = useState([
		{
			date: "14.14.2016",
			category: "Все",
			product: "Молоко",
			Stock: "ничего",
			key: "0",
		},
	]);
	const addHandlerData = (product) => {
		setListofDATA((list) => {
			return [
				{
					date: date.toString(),
					category: category,
					product: product,
					Stock: Stock,
					key: Math.random().toString(36).substring(7),
				},
				...list,
			];
		});
	};
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>

				<View style={styles.container}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>Рецепты</Text>
				</View>

				<StatusBar style="dark" backgroundColor="#1E1E20" />

			</SafeAreaView>
		</GestureHandlerRootView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	contentContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		//marginHorizontal: 16,
		//marginBottom: 10,
		//borderRadius: 10,
		fontSize: 16,
		lineHeight: 20,
		padding: 8,
		backgroundColor: "#FFFFFF",
		color: "#00160A",
		borderColor: "#000000",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		width: "90%",
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	flat: {
		height: "72%",
	},
});
