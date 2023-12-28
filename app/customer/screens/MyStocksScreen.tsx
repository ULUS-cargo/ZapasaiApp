import * as React from "react";
import { useMemo, useRef, useCallback, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Modal,
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
import { AntDesign } from "@expo/vector-icons";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

import Form from "./MyStocks/Form";
import ListItem from "./MyStocks/ListItem";
import ListItemCategoryScreen from "./MyStocks/ListItemCategoryScreen";
import ListItemDataCategoryScreen from "./MyStocks/ListItemDataCategoryScreen";
export default function MyStockScreen() {
	const onchangeStock = (Stock) => {
		setStock(Stock);
	};
	const [Stock, setStock] = React.useState("");
	const today = new Date();
	const startDate = getFormatedDate(
		today.setDate(today.getDate() + 1),
		"YYYY/MM/DD"
	);
	const onchange = (product) => {
		setProduct(product);
	};
	const [category, setCategory] = React.useState("Все");
	const [open, setOpen] = React.useState(false); //open and close modal
	const [date, setDate] = React.useState("2023/23/11"); //date var
	const [product, setProduct] = React.useState("");
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
		{ date: "2023/11/29", category: "Все", product: "Молоко", Stock:'Купить', key: "0" },
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
		<GestureHandlerRootView style={{ flex: 1}}>
			<SafeAreaView style={{ flex: 1}}>
				<View style={styles.container}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>Мои запасы</Text>
					<Text style={{ fontWeight: "400" }}>Категории</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "flex-start",
						}}>
						<View style={{ alignItems: "flex-start" }}>
							<FlatList
								numColumns={4}
								key={listOfItems.keys.toString()}
								data={listOfItems}
								renderItem={({ item }) => (
									<ListItemCategoryScreen el={item} SaveHandler={setCategory} />
								)}
							/>
						</View>
						<TouchableOpacity onPress={handleOpenPress}>
							<AntDesign
							
								style={{ paddingLeft: 60, }}
								name="pluscircle"
								size={50}
								color="#FF784C"
							/>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: 30, borderWidth: 2, width: "100%" }}></View>
					<View style={{ alignItems: "flex-start" }}>
						<FlatList
							data={DATA}
							renderItem={({ item }) => (
								<ListItemDataCategoryScreen
									el={item}
									SaveHandler={setCategory}
								/>
							)}
						/>
					</View>
					<BottomSheet
						backgroundStyle={{ backgroundColor: "#F6F6FA" }}
						backdropComponent={renderBackdrop}
						ref={bottomSheetRef}
						enablePanDownToClose={true}
						handleIndicatorStyle={{
							backgroundColor: "#ffff",
						}}
						index={-1}
						snapPoints={snapPoints}>
						<View style={styles.contentContainer}>
							<Text>Ваш продукт</Text>
							<Text style={{ marginBottom: 5 }}>Введите название продукта</Text>
						</View>

						<BottomSheetTextInput
							placeholder="Введите запас"
							placeholderTextColor="black"
							style={styles.input}
							onChangeText={onchange}
						/>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<TouchableOpacity onPress={handleOnPress}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: "FFFF",
										borderRadius: 20,
										borderColor: "#63441",
									}}>
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "center",
											backgroundColor: "#4D4D4D",
											width: 134,
											height: 30,
											borderRadius: 12.5,
											marginLeft: 15,
										}}>
										<Ionicons
											name="calendar"
											size={18}
											color="#FF784C"
											style={{ paddingRight: 8 }}
										/>

										<Text>Напоминание</Text>
									</View>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={handleOpenPressCategory}>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										//justifyContent: "center",
										backgroundColor: "#4D4D4D",
										width: 110,
										height: 30,
										borderRadius: 12.5,
										marginLeft: 15,
									}}>
									<View
										style={{
											flexDirection: "row",
											width: 100,
											height: 30,
											alignItems: "center",
											justifyContent: "center",
										}}>
										<Fontisto
											name="list-2"
											size={14}
											color="#FF784C"
											style={{ paddingRight: 10, alignItems: "center" }}
										/>
										<Text
											style={{
												alignContent: "center",
											}}>
											Категории
										</Text>
									</View>
								</View>
							</TouchableOpacity>
							{/* НАПИСАТЬ ДОБАВЛЕНИЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ */}
							<TouchableOpacity
								onPress={() => {
									if (product != "") {
										addHandlerData(product);
										handleClosePress();
									}
								}}>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										backgroundColor: "#4D4D4D",
										width: 80,
										height: 50,
										borderRadius: 12.5,
										marginLeft: 24,
									}}>
									<Feather name="send" size={24} color="#FF784C" />
								</View>
							</TouchableOpacity>
							<Modal animationType="slide" transparent={true} visible={open}>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<DatePicker
											mode="calendar"
											minimumDate={startDate}
											selected={date}
											onDateChange={handleChange}
										/>
										<BottomSheetTextInput
											placeholder="Введите напоминание"
											placeholderTextColor="#ffff"
											onChangeText={onchangeStock}
											style={{
												color: "white",
												flexDirection: "row",
												alignItems: "center",
												justifyContent: "center",
												width: 300,
												backgroundColor: "#4D4D4D",
												borderRadius: 0.5,
												marginHorizontal: 14,
												marginBottom: 10,
												fontSize: 16,
												lineHeight: 20,
												padding: 8,
											}}
										/>
										<TouchableOpacity onPress={handleOnPress}>
											<View
												style={{
													backgroundColor: "#4D4D4D",
													borderRadius: 30,
													alignItems: "center",
													justifyContent: "center",
													height: 70,
													width: 70,
												}}>
												<Feather
													style={{
														alignItems: "center",
														justifyContent: "center",
													}}
													name="send"
													size={24}
													color="#FF784C"
												/>
											</View>
										</TouchableOpacity>
									</View>
								</View>
							</Modal>
						</View>
					</BottomSheet>

					<BottomSheet
						
						backgroundStyle={{ backgroundColor: "#F6F6FA" }}
						backdropComponent={renderBackdrop}
						ref={bottomSheetRefCategory}
						enablePanDownToClose={true}
						handleIndicatorStyle={{
							backgroundColor: "#ffff",
						}}
						index={-1}
						snapPoints={snapPointsCategory}>
						<View style={styles.contentContainer}>
							<Text>Категории</Text>
						</View>
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Form addHandler={addHandler} />
							<View style={styles.flat}>
								<SafeAreaView style={{ flex: 1 }}>
									<FlatList
										key={listOfItems.keys.toString()}
										data={listOfItems}
										renderItem={({ item }) => (
											<ListItem el={item} SaveHandler={setCategory} />
										)}
									/>
								</SafeAreaView>
							</View>
						</View>
					</BottomSheet>
				</View>

				<StatusBar style="dark" backgroundColor="#1E1E20" />
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 24,
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F6F6FA",
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
