import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	TouchableHighlight,
    TouchableOpacity,
	View
} from "react-native";
import React from "react";



export default function ListItem({el, SaveHandler}) {
	return (
        <TouchableOpacity onPress={()=> SaveHandler(el.text)}>
			<View style={{alignItems:'center',justifyContent:'center', borderRadius:15}}>
            <Text style={styles.txt}>{el.text}</Text>
			</View>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
    txt:{
        color: "white",
        backgroundColor: "#4A4A4C",
        borderRadius: 15,
		fontWeight: '700',
        textAlign: "center",
		textAlignVertical:'center',
		top:1,
		left:0,
		right:0,
		bottom:0,
		width: 369,
		height: 68,

        
    },

});
