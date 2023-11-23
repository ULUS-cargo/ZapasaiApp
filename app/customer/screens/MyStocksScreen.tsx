import * as React from "react";
import { useMemo, useRef, useCallback, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableOpacity,
	Modal,
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

export default function MyStockScreen() {

	const [listOfItems, setListOfItems] = useState([
		{text: 'Мясо', key: '0' , date:Date.UTC, },
		{text: 'Масло', key: '1', },
	  ])
///////////ТУДУШКА/////////////
	  const addHandler = (text)=>{
		setListOfItems((list)=>{
		  return [
			{text: text, key: Math.random().toString(36).substring(7)},
			...list
		  ]
		})
	  };
	  const deleteHandler = (key) =>{
		setListOfItems((list) =>{
		  return list.filter(listOfItems => listOfItems.key != key)
		});
	  };
	  const [text,setValue] = useState('');
	  const onchange = (text)=>{
		  setValue(text);
	  };

///////////ТУДУШКА/////////////////// 
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
	
	const mainSnapPoints = useMemo(() => ["90%"], []);
	const snapPoints = useMemo(() => ["1%", "45%"], []);

	
	const bottomSheetRef = useRef<BottomSheet>(null);
	const handleClosePress = () => bottomSheetRef.current?.close();
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

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<TouchableOpacity onPress={handleOpenPress}>
						<AntDesign style={{paddingLeft:250	}} name="pluscircle" size={50} color="#FF784C" />
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
							<Text>Введите название продукта</Text>
						</View>

						<BottomSheetTextInput style={styles.input} />

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
									<Fontisto
										name="list-2"
										size={14}
										color="#FF784C"
										style={{ paddingRight: 10 }}
									/>
									<Text
										style={{ alignItems: "center", alignContent: "center" }}>
										Категории
									</Text>
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
									}} >
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
										style={{
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "center",
											width: 300,
											backgroundColor: "#4D4D4D",
											borderRadius: 12.5,
											marginHorizontal: 16,
											marginBottom: 10,
											fontSize: 16,
											lineHeight: 20,
											padding: 8,
										}}
									/>
									<TouchableOpacity onPress={handleOnPress}>
										<View
											style={{
												paddingTop: 10,
												backgroundColor: "#4D4D4D",
												borderRadius: 30,
												alignItems: "center",
												justifyContent: "center",
												height: 50,
												width: 50,
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
				</View>
				<StatusBar style='dark' backgroundColor="#1E1E20" />
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
});
