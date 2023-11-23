import {View, Text, TouchableOpacity, TextInput,StyleSheet, Alert} from 'react-native';
import React, {useRef,useState} from 'react';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../../../config';
import firebase from 'firebase/compat/app';
const Otp =() =>{
   const [phoneNumber, setPhoneNumber] = useState('');
   const [code, setCode] = useState('');
   const [verificationId, setVerificationId] = useState(null);
   const recaptchaVerifier = useRef(null);

   const sendVerification = () =>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(sendVerificationId);
        setPhoneNumber('');
   };
   const confirmCode =() =>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
    );
    firebase.auth().signInWithCredential(credential)
    .then(()=> {
        setCode('');
    })
    .catch((error)=>{
        alert(error);
    })
    Alert.alert(
        'Login Successful.'
    );
   }
   return (
    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
        ref = {recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        />
        <Text style ={styles.otpText}>
            Login using OTP
        </Text>
        <TextInput
        placeholder='Телефонный номер +7..'
        onChangeText={setPhoneNumber}
        keyboardType='phone-pad'
        autoCompleteType = 'tel'
        style={styles.textInput}
        />
        <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
            <Text style={styles.buttonText}>

            </Text>
        </TouchableOpacity>
        <TextInput 
            placeholder='Confirm Code'
            onChangeText={setCode}
            keyboardType='number-pad'
            style={styles.textInput}
            />
            <TouchableOpacity onPress={confirmCode}>
                <Text style ={styles.buttonText}>
                    Confirm verification
                </Text>
            </TouchableOpacity>
    </View>
   )
}
export default Otp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#000",
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal: 20,
        fontSize:24,
        borderBottomColor: '#ffff',
        borderBottomWidth: 2,
        marginBottom:20,
        textAlign:20,
        textAlign:'center',
        color:'#ffff'
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#fff',
        borderRadius:15
    },
    sendCode:{
        padding:20,
        backgroundColor:"#5121",
        borderRadius: 15
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },
    otpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20
    }
})
