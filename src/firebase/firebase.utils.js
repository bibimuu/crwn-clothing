import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYxAt8yxpFshxxTtTO0_gfciYzkAZqN3M",
  authDomain: "crwn-db-b6c63.firebaseapp.com",
  databaseURL: "https://crwn-db-b6c63.firebaseio.com",
  projectId: "crwn-db-b6c63",
  storageBucket: "crwn-db-b6c63.appspot.com",
  messagingSenderId: "1065947790691",
  appId: "1:1065947790691:web:a36d6c50a9c6aee9e02756",
  measurementId: "G-GG1T4ET6LL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
