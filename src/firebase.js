import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT5CwmOgmw8I_J9eed4GWQ4ogy3rZvoWM",
  authDomain: "tienda-de-libros-2c1e2.firebaseapp.com",
  projectId: "tienda-de-libros-2c1e2",
  storageBucket: "tienda-de-libros-2c1e2.firebasestorage.app",
  messagingSenderId: "109767809057",
  appId: "1:109767809057:web:4e63098946c1bc951cab60",
  measurementId: "G-1XNGTM6KVX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);