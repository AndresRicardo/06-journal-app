// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA2JPCP4-msGG5Q5A4mmwFHWIAslJTogxA",
	authDomain: "journal-app-65bcb.firebaseapp.com",
	projectId: "journal-app-65bcb",
	storageBucket: "journal-app-65bcb.appspot.com",
	messagingSenderId: "992036990859",
	appId: "1:992036990859:web:b5587205fdde6fa0f1098e",
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
