// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo2SPW_Leoa7-kPi10acCg53cnheJF5BA",
  authDomain: "interviewtest-server.firebaseapp.com",
  projectId: "interviewtest-server",
  storageBucket: "interviewtest-server.appspot.com",
  messagingSenderId: "656471522359",
  appId: "1:656471522359:web:5c738b4f6774e6bb3c53b2",
  measurementId: "G-NZS65SBCHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);