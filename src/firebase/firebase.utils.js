import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCQymnruSsRqpMTwgm_xnsky6JhNIJ1OxA",
  authDomain: "crwn-db-d764b.firebaseapp.com",
  projectId: "crwn-db-d764b",
  storageBucket: "crwn-db-d764b.appspot.com",
  messagingSenderId: "123103237475",
  appId: "1:123103237475:web:d8dbb695c86f902295ef56",
  measurementId: "G-K40JH7JT05",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
