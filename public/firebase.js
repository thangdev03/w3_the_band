// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXRl2oGTnSOVwmmSLXSEhaETq41vyBzg8",
  authDomain: "w3-the-band-2023.firebaseapp.com",
  projectId: "w3-the-band-2023",
  storageBucket: "w3-the-band-2023.appspot.com",
  messagingSenderId: "908202023832",
  appId: "1:908202023832:web:8e762cf10ced7930db69ed",
  measurementId: "G-WM1GSVSXZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);