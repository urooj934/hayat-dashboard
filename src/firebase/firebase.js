//import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import  firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCircJp6SDHJFTGYmyOHxsyrKa2SIRusUY",
  authDomain: "hayat-1ad6a.firebaseapp.com",
  projectId: "hayat-1ad6a",
  storageBucket: "hayat-1ad6a.appspot.com",
  messagingSenderId: "402251031175",
  appId: "1:402251031175:web:aa311e88ba50d35efb8e22",
  measurementId: "G-22HE7M9SN6"
};
//iffirebase has been initialized
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app();
  }
  // Initialize Firebase
  export const firestore =firebase.firestore();