import { initializeApp } from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDEjFql6ML76kAf73QOS5tT_4i6-1Oqu0k",
  authDomain: "yisp-proyecto-backfront.firebaseapp.com",
  projectId: "yisp-proyecto-backfront",
  storageBucket: "yisp-proyecto-backfront.appspot.com",
  messagingSenderId: "610907672335",
  appId: "1:610907672335:web:6cf9791a0a55407457787a"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestone()
const User = db.collection('Users')

module.exports = User