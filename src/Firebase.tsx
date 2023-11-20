import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq0QlVRSr1mDbkE5rESwVuMNy0koTt3_0",
  authDomain: "ibms-sys.firebaseapp.com",
  projectId: "ibms-sys",
  storageBucket: "ibms-sys.appspot.com",
  messagingSenderId: "955156751839",
  appId: "1:955156751839:web:489a473437284c0dc3906a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
