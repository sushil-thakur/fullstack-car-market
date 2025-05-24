// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgOagNJK-UDhvm1irqX1m7onzWxDl_1Bs",
  authDomain: "car-marketplace-c38a1.firebaseapp.com",
  projectId: "car-marketplace-c38a1",// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY
  authDomain: "car-marketplace-c38a1.firebaseapp.com",
  projectId: "car-marketplace-c38a1",
  storageBucket: "car-marketplace-c38a1.firebasestorage.app",
  messagingSenderId: "1074370321980",
  appId: "1:1074370321980:web:b32eb23c6856eb6b61ad39",
  measurementId: "G-DGZL5NB0H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
// const analytics = getAnalytics(app);
//   storageBucket: "car-marketplace-c38a1.firebasestorage.app",
//   messagingSenderId: "1074370321980",
//   appId: "1:1074370321980:web:b32eb23c6856eb6b61ad39",
//   measurementId: "G-DGZL5NB0H3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);