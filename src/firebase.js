import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDSM52yQ8qZpOPQd0x9IpTCBiDZ280-rqA",
  authDomain: "disney-clone-gt.firebaseapp.com",
  projectId: "disney-clone-gt",
  storageBucket: "disney-clone-gt.appspot.com",
  messagingSenderId: "507732554521",
  appId: "1:507732554521:web:f7a14dc908c6757e1b4b88",
  measurementId: "G-G0ZYHF7RFY"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
