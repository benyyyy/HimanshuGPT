// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC70N7BT9lihevI06ZeOvQ5YD8dG-PTcg",
  authDomain: "himanshugpt-982d5.firebaseapp.com",
  projectId: "himanshugpt-982d5",
  storageBucket: "himanshugpt-982d5.firebasestorage.app",
  messagingSenderId: "1097403890071",
  appId: "1:1097403890071:web:0b382993ddea81fe2facd2",
  measurementId: "G-NKN63FMGCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);