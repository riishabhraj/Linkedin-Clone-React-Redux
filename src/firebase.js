// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9v31ROnDPn_g9oCkMTdWHfePvzPW9BlQ",
  authDomain: "linkedin-clone-2f867.firebaseapp.com",
  projectId: "linkedin-clone-2f867",
  storageBucket: "linkedin-clone-2f867.appspot.com",
  messagingSenderId: "79819060267",
  appId: "1:79819060267:web:490f5465209b851a76e66e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
