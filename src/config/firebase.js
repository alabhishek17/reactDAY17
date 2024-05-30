// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPTQ8cRmllDkNK7uMojMzOAUCI8UuhFc",
  authDomain: "reactproject-39dc6.firebaseapp.com",
  projectId: "reactproject-39dc6",
  storageBucket: "reactproject-39dc6.appspot.com",
  messagingSenderId: "589094440951",
  appId: "1:589094440951:web:477891aeb01d4e883868f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app