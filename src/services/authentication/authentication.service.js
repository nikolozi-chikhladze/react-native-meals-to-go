import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjFU9Br1XkAIksxaIyLXhHiYZGHdPBaq8",
  authDomain: "mealstogo-44ddf.firebaseapp.com",
  projectId: "mealstogo-44ddf",
  storageBucket: "mealstogo-44ddf.appspot.com",
  messagingSenderId: "825561216703",
  appId: "1:825561216703:web:ba272a7fbdda12d662780a",
};

export const getFirebaseAuth = () => {
  let auth = null;
  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  } else {
    auth = getAuth(getApps()[0]);
  }
  return auth;
};

export const loginRequest = (email, password) => {
  const auth = getFirebaseAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const registerRequest = (email, password) => {
  const auth = getFirebaseAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const logoutRequest = () => {
  const auth = getFirebaseAuth();
  signOut(auth);
};
