import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "ecommerce-maldonado-fe72c.firebaseapp.com",
  projectId: "ecommerce-maldonado-fe72c",
  storageBucket: "ecommerce-maldonado-fe72c.appspot.com",
  messagingSenderId: "298336494813",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
