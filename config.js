import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
	apiKey: "AIzaSyAv-ua9SsD6oLxwKNH5eFRbFmWxZrbktII",
	authDomain: "zapasai.firebaseapp.com",
	projectId: "zapasai",
	storageBucket: "zapasai.appspot.com",
	messagingSenderId: "516944404322",
	appId: "1:516944404322:web:afc0ec2ba3e9fade98163b",
	measurementId: "G-TPFQ9K3NFH",
};
if (firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
