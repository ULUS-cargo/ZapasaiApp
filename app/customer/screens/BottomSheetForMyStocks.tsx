import * as React from "react";
import { useMemo, forwardRef,useCallback, useRef } from "react";
import { StyleSheet, View, Text,  TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetModal,
	BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type Ref = BottomSheetModal;

export const BottomSheetForMyStocks = forwardRef<Ref>((props,ref) =>{
    const snapPoints = useMemo(()=> ['50%','75%'], []);
	
	const bottomSheetRef = useRef<BottomSheet>(null);
	const handleClosePress = () => bottomSheetRef.current?.close();
	const handleOpenPress = () => bottomSheetRef.current?.expand();


	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<TouchableOpacity onPress={handleOpenPress}>
						<Text>Open</Text>
					</TouchableOpacity>

					<BottomSheetModal
						backgroundStyle={{backgroundColor:'#F6F6FA'}}
						ref={ref}
						index={0}

						handleIndicatorStyle={{
							backgroundColor: "#ffff",
						}}
						snapPoints={snapPoints}>
						<View style={styles.contentContainer}>
							<Text>Ваш продукт</Text>
							<Text>Введите название продукта</Text>
						</View>
						<BottomSheetTextInput style={styles.input} />
					</BottomSheetModal>
				</View>
				<StatusBar backgroundColor="#1E1E20" />
			</SafeAreaView>
		</GestureHandlerRootView>
	);
});	

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
		borderColor:'#000000'
	},
});
