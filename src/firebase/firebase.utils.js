import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBs0EzVPVOXAmJ2a60j10SgPYXR0i5Lh-0",
  authDomain: "crown-db-8e034.firebaseapp.com",
  databaseURL: "https://crown-db-8e034.firebaseio.com",
  projectId: "crown-db-8e034",
  storageBucket: "crown-db-8e034.appspot.com",
  messagingSenderId: "697006261806",
  appId: "1:697006261806:web:40e3d1853d70625b1681bf",
  measurementId: "G-4MLS9KE5KX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
