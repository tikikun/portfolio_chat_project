// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_yygTY65p0ynRS6psnCAVkS-2_m5zCWs",
  authDomain: "vue-learning-27bcf.firebaseapp.com",
  databaseURL:
    "https://vue-learning-27bcf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-learning-27bcf",
  storageBucket: "vue-learning-27bcf.appspot.com",
  messagingSenderId: "616228203966",
  appId: "1:616228203966:web:e785f2b9a427fee6771def",
  measurementId: "G-STZEHY8F0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseDb = getDatabase(app);
export { analytics, firebaseDb };
