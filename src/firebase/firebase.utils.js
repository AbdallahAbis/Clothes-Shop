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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
