import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA35Eco1aIAtQxF9dsmVmK9M4_3X14fJfI",
  authDomain: "react-coder-b00a6.firebaseapp.com",
  projectId: "react-coder-b00a6",
  storageBucket: "react-coder-b00a6.appspot.com",
  messagingSenderId: "87949548869",
  appId: "1:87949548869:web:10ef9731a07e9b4078f22c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)