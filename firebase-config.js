'use client';
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAk7dzHWv3bCvkBl9ThMLKWZDMMg-AZHZo",
    authDomain: "next-crm-14d6d.firebaseapp.com",
    projectId:"next-crm-14d6d",
    storageBucket: "next-crm-14d6d.appspot.com",
    messagingSenderId: "440588696852",
    appId: "1:440588696852:web:747f43b2ebaa69d1811601",
};

const app = initializeApp(firebaseConfig);
export const gprovider = new GoogleAuthProvider();
export const db = getFirestore(app);