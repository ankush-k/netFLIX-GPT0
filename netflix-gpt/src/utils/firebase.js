// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcE4rfFF6mFgLt-niyycEy-NdAiZCasVg",
  authDomain: "netflixgpt-cfe21.firebaseapp.com",
  projectId: "netflixgpt-cfe21",
  storageBucket: "netflixgpt-cfe21.appspot.com",
  messagingSenderId: "926188331908",
  appId: "1:926188331908:web:f224ea6fe1147ff268f3d1",
  measurementId: "G-B6K04NC871",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
