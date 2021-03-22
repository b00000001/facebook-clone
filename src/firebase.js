import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVPy9lz-m8eqt1M-GilLL7op0yg4h1a9M",
  authDomain: "facebook-clone-1be60.firebaseapp.com",
  projectId: "facebook-clone-1be60",
  storageBucket: "facebook-clone-1be60.appspot.com",
  messagingSenderId: "802291953932",
  appId: "1:802291953932:web:8b29fd459da4063945d929",
  measurementId: "G-JZ63MPC5M0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
