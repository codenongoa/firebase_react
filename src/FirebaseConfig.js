import firebase from'firebase/compat/app'
import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf_9u0FbeXAigW58vWjKiq6t4WbYyNMpU",
  authDomain: "crud-f959f.firebaseapp.com",
  projectId: "crud-f959f",
  storageBucket: "crud-f959f.appspot.com",
  messagingSenderId: "73383208162",
  appId: "1:73383208162:web:640f3a1f6e26e8e120eabb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()