import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4HonxhPQOSIjxvWG6Dq5mn7ivIya-F6Y",
  authDomain: "chima-shop.firebaseapp.com",
  projectId: "chima-shop",
  storageBucket: "chima-shop.appspot.com",
  messagingSenderId: "719866453219",
  appId: "1:719866453219:web:4efc015f594315ed2f39d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;