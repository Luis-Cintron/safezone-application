// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDinVGEE2P4xfmcxvSRT1Bk5ar4IUdNdyQ",
  authDomain: "safezone-990aa.firebaseapp.com",
  projectId: "safezone-990aa",
  storageBucket: "safezone-990aa.appspot.com",
  messagingSenderId: "59773414207",
  appId: "1:59773414207:web:e76de15aacab66051d418a",
  measurementId: "G-KCFPBJ9MCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app; 