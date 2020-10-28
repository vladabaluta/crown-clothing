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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
