// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQESMzAudVYpfgLg-MMK2o6f0pr_K0hLI",
  authDomain: "cooky-bacb5.firebaseapp.com",
  projectId: "cooky-bacb5",
  storageBucket: "cooky-bacb5.appspot.com",
  messagingSenderId: "244852787410",
  appId: "1:244852787410:web:4e042f7132a0604eac450b",
  measurementId: "G-LPJSXCCZ6P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


