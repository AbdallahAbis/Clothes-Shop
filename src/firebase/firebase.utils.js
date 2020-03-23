import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBMxxa9YK9pgSD4reoCVhrKHs4dNmFkJ1w",
  authDomain: "clothes-shop-93a97.firebaseapp.com",
  databaseURL: "https://clothes-shop-93a97.firebaseio.com",
  projectId: "clothes-shop-93a97",
  storageBucket: "clothes-shop-93a97.appspot.com",
  messagingSenderId: "238422823021",
  appId: "1:238422823021:web:ee53467defe85537eeaf64"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
