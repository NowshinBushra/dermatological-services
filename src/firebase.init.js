// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2NubqVixxL-EbEq-cAZu0s8Fb3aq64Aw",
  authDomain: "dermatological-services.firebaseapp.com",
  projectId: "dermatological-services",
  storageBucket: "dermatological-services.appspot.com",
  messagingSenderId: "198871773244",
  appId: "1:198871773244:web:191779df6f2a5489505339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);

export default auth;