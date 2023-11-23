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


export default function MyStockScreen() {
	
	const today = new Date();
	const startDate = getFormatedDate(
		today.setDate(today.getDate() + 1),
		"YYYY/MM/DD"
	);
	const [open, setOpen] = React.useState(false); //open and close modal
	const [date, setDate] = React.useState("2023/23/11"); //date var

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
	
	const [listOfItems, setListOfItems] = useState([
		{ text: "Мясо", key: "0" },
		{ text: "Овощи", key: "1" },
		{ text: "Крупа", key: "2" },
		{ text: "Лекарства", key: "3" },
	]);

	const addHandler = (text) => {
		setListOfItems((list) => {
			return [
				{ text: text, key: Math.random().toString(36).substring(7) },
				...list,
			];
		});
	};
	const deleteHandler = (key) => {
		setListOfItems((list) => {
			return list.filter((listOfItems) => listOfItems.key != key);
		});
	};
	

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>Мои запасы</Text>
					<Text style={{ fontStyle: "italic" }}>Категории</Text>
					<View style={{flexDirection:'row'}}>
						
						
					</View>
					<TouchableOpacity onPress={handleOpenPress}>
						<AntDesign
							style={{ paddingLeft: 250 }}
							name="pluscircle"
							size={50}
							color="#FF784C"
						/>
					</TouchableOpacity>

					<BottomSheet
						backgroundStyle={{ backgroundColor: "#F6F6FA" }}
						backdropComponent={renderBackdrop}
						ref={bottomSheetRef}
						enablePanDownToClose={true}
						handleIndicatorStyle={{
							backgroundColor: "#ffff",
						}}
						index={0}
						snapPoints={snapPoints}>
						<View style={styles.contentContainer}>
							<Text>Ваш продукт</Text>
							<Text style={{ marginBottom: 5 }}>Введите название продукта</Text>
						</View>

						<BottomSheetTextInput
							placeholder="Введите запас"
							placeholderTextColor="black"
							style={styles.input}
						/>

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
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										backgroundColor: "#4D4D4D",
										width: 115,
										height: 30,
										borderRadius: 12.5,
										marginLeft: 15,
									}}>
									<TouchableOpacity onPress={handleOpenPressCategory}>
										<View
											style={{
												flexDirection: "row",
												width: 100,
												height: 30,
												alignItems: "center",
											}}>
											<Fontisto
												name="list-2"
												size={14}
												color="#FF784C"
												style={{ paddingRight: 10 }}
											/>
											<Text
												style={{
													alignItems: "center",
													alignContent: "center",
												}}>
												Категории
											</Text>
										</View>
									</TouchableOpacity>
								</View>

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
									<TouchableOpacity onPress={handleOnPress}></TouchableOpacity>
								</View>
							</View>
						</Modal>
					</BottomSheet>

					<BottomSheet
						backgroundStyle={{ backgroundColor: "#F6F6FA" }}
						backdropComponent={renderBackdrop}
						ref={bottomSheetRefCategory}
						enablePanDownToClose={true}
						handleIndicatorStyle={{
							backgroundColor: "#ffff",
						}}
						index={0}
						snapPoints={snapPointsCategory}>
						<View style={styles.contentContainer}>
							<Text>Категории</Text>
						</View>
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Form addHandler={addHandler} />
							<View style={styles.flat}>
								<FlatList
									data={listOfItems}
									renderItem={({ item }) => (
										<ListItem el={item} deleteHandler={deleteHandler} />
									)}
								/>
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
	},
	contentContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
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
