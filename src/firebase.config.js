// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7LNIyarSI7wKJrlqpSZUnft1CSpLj370",
  authDomain: "bistro-bos-1c3a2.firebaseapp.com",
  projectId: "bistro-bos-1c3a2",
  storageBucket: "bistro-bos-1c3a2.appspot.com",
  messagingSenderId: "384370025146",
  appId: "1:384370025146:web:3f25fb68c548b722955883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app