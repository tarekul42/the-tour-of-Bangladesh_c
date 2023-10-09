// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_-S_5QkUgZHw4i5KhclBmzxh8sgDV-Lo",
  authDomain: "the-tour-of-bangladesh.firebaseapp.com",
  projectId: "the-tour-of-bangladesh",
  storageBucket: "the-tour-of-bangladesh.appspot.com",
  messagingSenderId: "745497164062",
  appId: "1:745497164062:web:d3482c62ae3314c175310f",
  measurementId: "G-R4G4KCB2J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;