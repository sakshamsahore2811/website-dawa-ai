// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6BaxkfPCSjCQtBLHYt7vu6uesQGEtcuA",
  authDomain: "dawacoin-28f71.firebaseapp.com",
  projectId: "dawacoin-28f71",
  storageBucket: "dawacoin-28f71.appspot.com",
  messagingSenderId: "102021922962",
  appId: "1:102021922962:web:47a5f8484132b20373a64b",
  measurementId: "G-MFG27GX3LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);