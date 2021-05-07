import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCI_lAXjkrhQR5oCEGwnh_OqSfaYo7Wuk',
  authDomain: 'journal-app-react-47501.firebaseapp.com',
  projectId: 'journal-app-react-47501',
  storageBucket: 'journal-app-react-47501.appspot.com',
  messagingSenderId: '960758507737',
  appId: '1:960758507737:web:0ea0c392fdc3fb8d98f6c8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
