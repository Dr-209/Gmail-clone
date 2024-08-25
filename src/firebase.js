import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe3w41WXcFjVEwAdVdoobleAKY7O9TliI",
  authDomain: "clone-2e79f.firebaseapp.com",
  projectId: "clone-2e79f",
  storageBucket: "clone-2e79f.appspot.com",
  messagingSenderId: "972388783344",
  appId: "1:972388783344:web:5fb4e1170e8115bfc5de35",
  measurementId: "G-WKJL4SY42J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();