import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";

export default function ListItemCategoryScreen({ el, SaveHandler }) {
	return (
		<TouchableOpacity onPress={() => SaveHandler(el.text)}>
			<View 
				style={{
					alignItems: "flex-start",
					justifyContent: "center",
					borderRadius: 20,
					backgroundColor: "#FFFFF",
					borderWidth: 1,
					width: 300,
					height: 80,
					flex: 1,
				}}>
				<Text style={styles.txt}>{el.product}</Text>
				<View style={{width:25, height:25, borderRadius:25, backgroundColor:"#DC5C5C", marginLeft:12}}></View>
				<View style={{ flexDirection: "row",marginTop:22 }}>
					<Text style={styles.txt}>{el.Stock}</Text>
					<View style = {{alignItems:'flex-end',}}>
						<Text style={styles.txt}>{el.date}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	txt: {
		marginLeft:49,
		color: "#000000",
		textAlign: "center",
	},
});
