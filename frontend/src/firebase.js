import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRTgdjFHV0opo7Cs3RPiACPY8kzsEYzTk",
  authDomain: "yojanasathi-ai.firebaseapp.com",
  projectId: "yojanasathi-ai",
  storageBucket: "yojanasathi-ai.firebasestorage.app",
  messagingSenderId: "180711277228",
  appId: "1:180711277228:web:27f6dd562f51e4db319509",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();