import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpUUaLPKXxQpcZ2SUbUQ9l4fp09-1Wr5w",
  authDomain: "test-19277.firebaseapp.com",
  databaseURL: "https://test-19277-default-rtdb.firebaseio.com",
  projectId: "test-19277",
  storageBucket: "test-19277.appspot.com",
  messagingSenderId: "567561852471",
  appId: "1:567561852471:web:befbb80e6062fe8d1b11b2",
  measurementId: "G-EVW9YL3G04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 

export { db }