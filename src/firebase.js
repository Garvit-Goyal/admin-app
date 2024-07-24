// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "stalkcash-admin.firebaseapp.com",
    projectId: "stalkcash-admin",
    storageBucket: "stalkcash-admin.appspot.com",
    messagingSenderId: "145913321430",
    appId: "1:145913321430:web:2d421f3245a814759bf677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);