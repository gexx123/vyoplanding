import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDawGPx6rTeAiQ0tEFCCPRMafVQTSEWTh0",
  authDomain: "paperbot-rhxui0.firebaseapp.com",
  databaseURL: "https://paperbot-rhxui0-default-rtdb.firebaseio.com",
  projectId: "paperbot-rhxui0",
  storageBucket: "paperbot-rhxui0.appspot.com",
  messagingSenderId: "66257255126",
  appId: "1:66257255126:web:46b7d07229b02b7328e777"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const storage = getStorage(app);
