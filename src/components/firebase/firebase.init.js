// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvU-RD7YKC6dFfFkBi-jUd25AYaSkZF5g",
  authDomain: "coffee-store-114fc.firebaseapp.com",
  projectId: "coffee-store-114fc",
  storageBucket: "coffee-store-114fc.firebasestorage.app",
  messagingSenderId: "452609924745",
  appId: "1:452609924745:web:6e846ca2dcce35c5b1b058",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
