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
return(
	
	<View style={{ width:500,}}>
	<CalendarStrip
		calendarAnimation={{ type: "sequence", duration: 30 }}
		daySelectionAnimation={{
			type: "border",
			duration: 200,
			borderWidth: 1,
			borderHighlightColor: "white",
		}}

		style= {{justifyContent:'center',height:80, borderRadius:50}}
		calendarHeaderStyle = {{color:'white'}}
		calendarColor="white"
		highlightDateNameStyle={{color:'red'}}
		highlightDateNumberStyle = {{color:'black' }}
		disabledDateNameStyle={{color:'black'}}
		disabledDateNumberStyle={{color:'black'}}
		// datesBlacklist={dateBlackList}
		iconContainer={{flex:0.1}}

	/>
</View>
)
}
const styles = StyleSheet.create({
    
})