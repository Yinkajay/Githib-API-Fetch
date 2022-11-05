// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLZkE8O39qfzGRajfcchTKYDOlSNrT8A4",
  authDomain: "github-repo-fetch.firebaseapp.com",
  projectId: "github-repo-fetch",
  storageBucket: "github-repo-fetch.appspot.com",
  messagingSenderId: "1063925708906",
  appId: "1:1063925708906:web:0f476fdd4676771ff5b213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 