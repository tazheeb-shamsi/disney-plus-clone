import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdmp1TU-O2z5t17XAOwMYJfRZbLBm_3S4",
    authDomain: "disney-plus-clone-d5a67.firebaseapp.com",
    projectId: "disney-plus-clone-d5a67",
    storageBucket: "disney-plus-clone-d5a67.appspot.com",
    messagingSenderId: "779360082850",
    appId: "1:779360082850:web:3329468b574517beddf0fb",
    measurementId: "G-06W54E4EN8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new Firebase.auth.GooleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;