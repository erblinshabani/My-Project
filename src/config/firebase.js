// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXzIW8Jqf3nC_MlmG7vjQRO-uissq_VMQ",
  authDomain: "project-a777c.firebaseapp.com",
  projectId: "project-a777c",
  storageBucket: "project-a777c.appspot.com",
  messagingSenderId: "1066579462270",
  appId: "1:1066579462270:web:b163f78cefe16637e3702f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)