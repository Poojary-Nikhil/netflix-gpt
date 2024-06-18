// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5i6o_qb1-qYLKNPzHaEJfDbAANUKNrPY",
  authDomain: "netflixgpt-fe129.firebaseapp.com",
  projectId: "netflixgpt-fe129",
  storageBucket: "netflixgpt-fe129.appspot.com",
  messagingSenderId: "1063343355958",
  appId: "1:1063343355958:web:bca6d054332a62e671c097",
  measurementId: "G-3DWKFC25LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
