// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnGPeJi5rF7ATZdbCILei9Uj5jjn8rFyE",
  authDomain: "quora-clone-mern-9f73a.firebaseapp.com",
  projectId: "quora-clone-mern-9f73a",
  storageBucket: "quora-clone-mern-9f73a.appspot.com",
  messagingSenderId: "744547998041",
  appId: "1:744547998041:web:60c5aea7599a4c41eb5448",
  measurementId: "G-X1PEHXGQWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider};
