// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvaeaRV6TY7TfHypuJeQhTNjOxseyNTms",
  authDomain: "secuall-v1.firebaseapp.com",
  projectId: "secuall-v1",
  storageBucket: "secuall-v1.appspot.com",
  messagingSenderId: "740457721433",
  appId: "1:740457721433:web:ef2330630a88fb0ec84b48",
  measurementId: "G-FGTT1CD1LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
