// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz84eWqsQRym3DzMuSOEWVVkhooxviqbM",
  authDomain: "myfirstapp-74172.firebaseapp.com",
  projectId: "myfirstapp-74172",
  storageBucket: "myfirstapp-74172.appspot.com",
  messagingSenderId: "690442493892",
  appId: "1:690442493892:web:0276c04472181b7cb24e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;