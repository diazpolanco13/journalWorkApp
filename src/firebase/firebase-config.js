import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0UcQZnjnMtVVCs0G9nrq_xScHDihqkaE",
  authDomain: "journalworkapp.firebaseapp.com",
  databaseURL: "https://journalworkapp.firebaseio.com",
  projectId: "journalworkapp",
  storageBucket: "journalworkapp.appspot.com",
  messagingSenderId: "966497059491",
  appId: "1:966497059491:web:71dfc4a929f18d32f63516",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
