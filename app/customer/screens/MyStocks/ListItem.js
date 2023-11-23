import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	TouchableHighlight,
    TouchableOpacity
} from "react-native";
import React from "react";


export default function ListItem({el, deleteHandler}) {
	return (
        <TouchableHighlight onPress={()=> deleteHandler(el.key)}>
            <Text style={styles.txt}>{el.text}</Text>
        </TouchableHighlight>
	);
}


const styles = StyleSheet.create({
    txt:{
        color: "yellow",
        backgroundColor: "#666",
        padding: 20,
        borderRadius: 5,
        borderWidth: 1, 
        textAlign: "center",
        marginTop: 20 , 
        width: "60%",
        marginLeft: "20%",
        
    },

});
