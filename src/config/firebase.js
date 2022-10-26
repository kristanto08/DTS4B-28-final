// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu78QLMgoej6-Fh2FyKklcMLHc9ys2ryQ",
  authDomain: "dts4b-28-final.firebaseapp.com",
  projectId: "dts4b-28-final",
  storageBucket: "dts4b-28-final.appspot.com",
  messagingSenderId: "1093460141053",
  appId: "1:1093460141053:web:dc062a5124e05ccfb9af94",
  measurementId: "G-CVSPDY52SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//diexport
export {auth};