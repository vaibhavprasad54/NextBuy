// import firebase from "./firebase";
import { initializeApp } from "firebase/app";

const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAaWPMLZQEKiTdy1QH0bFaKB8TslAydbMY",
    authDomain: "nextbuy-57635.firebaseapp.com",
    projectId: "nextbuy-57635",
    storageBucket: "nextbuy-57635.appspot.com",
    messagingSenderId: "5771420865",
    appId: "1:5771420865:web:38cbf2665c0a58f2516040"
  };

  // Intializing the app after checking if one already exists or not
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;