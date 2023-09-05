// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPa4anBUNKIfFseqlg9nRDOMLmh_MkSc4",
  authDomain: "metaplay-4aeea.firebaseapp.com",
  projectId: "metaplay-4aeea",
  storageBucket: "metaplay-4aeea.appspot.com",
  messagingSenderId: "577717146944",
  appId: "1:577717146944:web:0009799c67329c47e256a5",
  measurementId: "G-H3C911GYN7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();

//firebase login for login
// firebase init then select hosting
// firebase deploy
