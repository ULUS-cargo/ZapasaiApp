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

export default function Form({addHandler}) {
    const [text,setValue] = useState('');
    const onchange = (text)=>{
        setValue(text);
    };
	return (
		<View style={styles.main}>
            <TextInput style = {styles.input} onChangeText={onchange} placeholder="Впиши задачу!"/>
            <Button color="#aa5a" title="Добавить" onPress={()=> addHandler(text)}/>
		</View>
	);
}


const styles = StyleSheet.create({
	main: {
        backgroundColor: 'black'
	},
	text: {

	},
    input:{
        color: "#5555",
        borderBottomWidth: 1 ,
        borderColor: "black",
        padding:10,
        marginVertical: 30,
        marginHorizontal: "20%",
        width: '60%',
        backgroundColor: "yellow",

    }
});