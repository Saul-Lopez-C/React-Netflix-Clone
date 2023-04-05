import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA_oiqgi2hWxPATZn1KJNjJy2ziz00rc5Q",
  authDomain: "react-netflix-clone-eb0bb.firebaseapp.com",
  projectId: "react-netflix-clone-eb0bb",
  storageBucket: "react-netflix-clone-eb0bb.appspot.com",
  messagingSenderId: "412604122752",
  appId: "1:412604122752:web:a2c344360424b56fed4865",
  measurementId: "G-R6KS4KZQC7"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);