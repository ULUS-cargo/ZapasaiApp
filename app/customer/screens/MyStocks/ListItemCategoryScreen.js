import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	TouchableHighlight,
    TouchableOpacity,
	View
} from "react-native";
import React from "react";



export default function ListItemCategoryScreen({el, SaveHandler}) {
	return (
        <TouchableOpacity onPress={()=> SaveHandler(el.text)}>
			<View style={{alignItems:'center',justifyContent:'center',flexDirection:'row', borderRadius:15}}>
            <Text style={styles.txt}>{el.text} </Text>
			</View>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
    txt:{
        
        color: "white",
        backgroundColor: "#4A4A4C",
        borderRadius: 10,
        textAlign: "center",
		top:1,
		left:0,
		right:5,
        marginRight:5,
		bottom:0,
		width: 'auto',
        margin:5,
		height:24

    },

});
