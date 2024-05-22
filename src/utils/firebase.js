// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHj0w-YOH7X0hxEyTO0uPgXCO9cnYru6g",
  authDomain: "tasty-zoom-login.firebaseapp.com",
  projectId: "tasty-zoom-login",
  storageBucket: "tasty-zoom-login.appspot.com",
  messagingSenderId: "41692586110",
  appId: "1:41692586110:web:0a1cfbfbd4511393cdb82f",
  measurementId: "G-4D5MBVSK7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
