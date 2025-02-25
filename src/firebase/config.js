import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd46R4K-1eV0EYqTt2uPFep3o-fvcso8Q",
  authDomain: "ecommerce-maldonado-fe72c.firebaseapp.com",
  projectId: "ecommerce-maldonado-fe72c",
  storageBucket: "ecommerce-maldonado-fe72c.appspot.com",
  messagingSenderId: "298336494813",
  appId: "1:298336494813:web:d12444b2e7d23ff11be734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)