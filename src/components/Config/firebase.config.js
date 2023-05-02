// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn9Bj8SDxFGW3iywWiyfkuOW-3dfAwO0Y",
  authDomain: "mr-chef-client.firebaseapp.com",
  projectId: "mr-chef-client",
  storageBucket: "mr-chef-client.appspot.com",
  messagingSenderId: "601076810142",
  appId: "1:601076810142:web:18e48edf76031009e8568f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;