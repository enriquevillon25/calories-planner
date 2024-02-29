// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNcBb4XDdKnPe6jWqtT7mpQyNSZR8AL_o",
  authDomain: "calories-planner.firebaseapp.com",
  projectId: "calories-planner",
  storageBucket: "calories-planner.appspot.com",
  messagingSenderId: "456456398268",
  appId: "1:456456398268:web:53a847c5874ada667237b9",
  measurementId: "G-Z6C4CH71TK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
