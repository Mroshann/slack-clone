// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNJYTwhrAvNTQ9-yM-gEpHV6TYXTTpLjA",
  authDomain: "slack-clone-31d5d.firebaseapp.com",
  projectId: "slack-clone-31d5d",
  storageBucket: "slack-clone-31d5d.appspot.com",
  messagingSenderId: "518530483473",
  appId: "1:518530483473:web:ef600781bbed068b95b8b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};