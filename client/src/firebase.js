import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCWzM7RCTWq5n0L-k_r_whHmSCiZx27Sws",
    authDomain: "fir-test-456ed.firebaseapp.com",
    databaseURL: "https://fir-test-456ed.firebaseio.com",
    projectId: "fir-test-456ed",
    storageBucket: "fir-test-456ed.appspot.com",
    messagingSenderId: "603538816783",
    appId: "1:603538816783:web:4a5a4d5773ecaed6c4887a"
  };

  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();