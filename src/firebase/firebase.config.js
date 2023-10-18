import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZOKZB8x5_yW0FWXG3BBM59YtDuu6DHsU",
  authDomain: "tech-brand-ebf4f.firebaseapp.com",
  projectId: "tech-brand-ebf4f",
  storageBucket: "tech-brand-ebf4f.appspot.com",
  messagingSenderId: "201747082352",
  appId: "1:201747082352:web:42481edcafb6eb339518b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
