// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "househeaven-c9d14.firebaseapp.com",
  projectId: "househeaven-c9d14",
  storageBucket: "househeaven-c9d14.appspot.com",
  messagingSenderId: "415586003006",
  appId: "1:415586003006:web:5ad97e749f662c7cc9096f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);