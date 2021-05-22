import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHT8z4Foovib5Bx17xPf2OyjBS5fn1hbs",
  authDomain: "to-do-app-1d2e6.firebaseapp.com",
  projectId: "to-do-app-1d2e6",
  storageBucket: "to-do-app-1d2e6.appspot.com",
  messagingSenderId: "141817573014",
  appId: "1:141817573014:web:0546b7343bfbc6d4cedcb7",
  measurementId: "G-L8BDPQRZ93",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
