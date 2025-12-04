// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-V4DhntN3_bPvxqYo0Z0NdpFDbEEfFSc",
  authDomain: "proyectoreact-pacheco.firebaseapp.com",
  projectId: "proyectoreact-pacheco",
  storageBucket: "proyectoreact-pacheco.firebasestorage.app",
  messagingSenderId: "262537538902",
  appId: "1:262537538902:web:a287aad818c6d1b7b37af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar instancia de firebase
export const db = getFirestore(app);
