// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyAwFgOrXtHW5E1bPCKMHRF4LrZWfgc7HHI",
  authDomain: "chat-edc89.firebaseapp.com",
  databaseURL: "https://chat-edc89-default-rtdb.firebaseio.com",
  projectId: "chat-edc89",
  storageBucket: "chat-edc89.appspot.com",
  messagingSenderId: "787724702251",
  appId: "1:787724702251:web:a86acf8ecde9500e52506e",
};*/

/*const firebaseConfig = {
  apiKey: "AIzaSyCT-VrYUXmm9VU9tgVZZ4ZgGomqPESS2qk",
  authDomain: "ssss-fd5c0.firebaseapp.com",
  projectId: "ssss-fd5c0",
  storageBucket: "ssss-fd5c0.appspot.com",
  messagingSenderId: "180315272116",
  appId: "1:180315272116:web:5bc0bf38f7a37f5000b8e1"
};*/

/*const firebaseConfig = {
  apiKey: "AIzaSyDdlLRgFxlhY4UX01fcQSD3hF0-2TFeclc",
  authDomain: "thev-a6cf4.firebaseapp.com",
  projectId: "thev-a6cf4",
  storageBucket: "thev-a6cf4.appspot.com",
  messagingSenderId: "922540244031",
  appId: "1:922540244031:web:6cf150eb265e7febc90c8a",
  measurementId: "G-NHFV9V0SWE"
};*/

/*const firebaseConfig = {
  apiKey: "AIzaSyCdBoIWRY5dUqTfYIpXQ1jIfu6A7biGQ1w",
  authDomain: "chat2-dea7d.firebaseapp.com",
  projectId: "chat2-dea7d",
  storageBucket: "chat2-dea7d.appspot.com",
  messagingSenderId: "840629434702",
  appId: "1:840629434702:web:36788c3c158c42c65c461f"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBN24ZWOsoe8bq8mN-oFAmTSZ-1tOk43PM",
  authDomain: "chat-cb0ff.firebaseapp.com",
  projectId: "chat-cb0ff",
  storageBucket: "chat-cb0ff.appspot.com",
  messagingSenderId: "30680399862",
  appId: "1:30680399862:web:cb2d0f2af9d447fb8411d7"
};

// Initialize Firebase
//export const app = initializeApp();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
