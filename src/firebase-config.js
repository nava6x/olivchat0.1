// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaRF9BRGyYvzrizqZDkyGU0km-KGDOD2o",
  authDomain: "olivchat0-1.firebaseapp.com",
  projectId: "olivchat0-1",
  storageBucket: "olivchat0-1.appspot.com",
  messagingSenderId: "798377365185",
  appId: "1:798377365185:web:4f9f64370d0d73925a0e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)