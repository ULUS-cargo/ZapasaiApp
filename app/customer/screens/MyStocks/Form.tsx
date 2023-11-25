import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Button,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React, { useState } from "react";


import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


export default function Form({ addHandler }) {
	const [text, setValue] = useState("");
	const onchange = (text) => {
		setValue(text);
	};
	return (
		<View style={styles.main}>
			<TextInput
				style={styles.input}
				onChangeText={onchange}
				placeholder="Впиши  категорию"
				placeholderTextColor='white'
			/>
			<TouchableOpacity>
				<View
					style={{
						
						backgroundColor: "#FF784C",
						width: 50,
						height: 75,
						alignItems:'center',
						justifyContent:'center',
						borderRadius:15,
						
					}}>
					<Feather name="send" size={24} color="#FFFF" onPress={()=>{ if(text!=""){addHandler(text)}}} />
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: "#4A4A4C",
		borderRadius: 28,
		flexDirection: "row",
		alignItems: 'center',
	},
	text: {
		alignItems:'center'
	},
	input: {
		color: "#ffff",
		borderBottomWidth: 1,
		borderColor: "black",
		marginVertical: 30,
		marginHorizontal: "10%",
		width: "60%",
	},
});
