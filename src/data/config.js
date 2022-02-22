// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRwgHlIbvXUluYhd22fxnAtCrOqq-YmCU",
  authDomain: "nailart-tienda.firebaseapp.com",
  projectId: "nailart-tienda",
  storageBucket: "nailart-tienda.appspot.com",
  messagingSenderId: "435527744279",
  appId: "1:435527744279:web:dd97d159f46be0e790d552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)