// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDALqqEaQEGDPOsDrJc1uNXFD7Lbj2b9Ls',
  authDomain:  'netflix-react-clone-2a04e.firebaseapp.com',
  projectId: 'netflix-react-clone-2a04e',
  storageBucket: 'netflix-react-clone-2a04e.appspot.com',
  messagingSenderId: '976214971518',
  appId: '1:976214971518:web:5ea96083148e903218742f'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)