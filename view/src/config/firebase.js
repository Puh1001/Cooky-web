// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth } from "firebase/auth";
import { firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhRtNRvW5Fqc2VJqAM029zi3OBFY_VX78",
  authDomain: "moviereact-25d21.firebaseapp.com",
  projectId: "moviereact-25d21",
  storageBucket: "moviereact-25d21.appspot.com",
  messagingSenderId: "480294658972",
  appId: "1:480294658972:web:bb2b8ddd28007fbc141e59",
  measurementId: "G-TTM20M0KEQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = firebase.firestore();

db.settings({ timestampInSnapshots: true })