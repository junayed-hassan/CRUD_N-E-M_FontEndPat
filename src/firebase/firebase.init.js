// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj3UVh960YYCRVk3K9f0tYtrtX0TilL5Q",
  authDomain: "coffeeuser-8ac8d.firebaseapp.com",
  projectId: "coffeeuser-8ac8d",
  storageBucket: "coffeeuser-8ac8d.firebasestorage.app",
  messagingSenderId: "760572736726",
  appId: "1:760572736726:web:20a008410f8d627dcac577",
  measurementId: "G-187FLYQ3RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {auth, analytics} 