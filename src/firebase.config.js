// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEPEHEX8XDjZSby6m1JnYdyL10exx392U",
  authDomain: "taskora-cc4e4.firebaseapp.com",
  projectId: "taskora-cc4e4",
  storageBucket: "taskora-cc4e4.firebasestorage.app",
  messagingSenderId: "539503339921",
  appId: "1:539503339921:web:de4a02d2ca6524174bd230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)