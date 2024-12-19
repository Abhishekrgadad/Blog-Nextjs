// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "next-blog-5eb0d.firebaseapp.com",
  projectId: "next-blog-5eb0d",
  storageBucket: "next-blog-5eb0d.firebasestorage.app",
  messagingSenderId: "547898389678",
  appId: "1:547898389678:web:ff66d970b9de037e95a93f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);